use std::cell::RefCell;
use std::collections::BTreeMap;
use candid::{self, CandidType, Deserialize};
use ic_cdk::{query, update};

#[derive(CandidType, Clone, Deserialize)]
struct Item {
    id: u64,
    content: String,
}

thread_local! {
    static STORAGE: RefCell<BTreeMap<u64, Item>> = RefCell::new(BTreeMap::new());
}

#[update]
fn create_item(id: u64, content: String) {
    STORAGE.with(|s| {
        s.borrow_mut().insert(id, Item { id, content });
    });
}

#[query]
fn read_item(id: u64) -> Option<Item> {
    STORAGE.with(|s| s.borrow().get(&id).cloned())
}

#[update]
fn update_item(id: u64, content: String) -> bool {
    STORAGE.with(|s| {
        if let Some(item) = s.borrow_mut().get_mut(&id) {
            item.content = content;
            true
        } else {
            false
        }
    })
}

#[update]
fn delete_item(id: u64) -> bool {
    STORAGE.with(|s| s.borrow_mut().remove(&id).is_some())
}

// Add this at the bottom of src/backend/src/lib.rs
ic_cdk::export_candid!();
