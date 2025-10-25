class PaginationHelper {
  constructor(collection, itemsPerPage) {
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
  }
  itemCount() {
    return this.collection.length;
  }
  pageCount() {
    return Math.ceil(this.itemCount() / this.itemsPerPage);
  }
  pageItemCount(pageIndex) {
    const doesPageExist = pageIndex >= 0 && pageIndex < this.pageCount();
    if (!doesPageExist) return -1;

    const isLastPage = pageIndex === this.pageCount() - 1;
    if (isLastPage)
      return this.itemCount() % this.itemsPerPage === 0
        ? this.itemsPerPage
        : this.itemCount() % this.itemsPerPage;

    return this.itemsPerPage;
  }
  pageIndex(itemIndex) {
    const doesItemExist =
      this.itemCount() && itemIndex >= 0 && itemIndex < this.itemCount();
    if (!doesItemExist) return -1;

    return Math.floor(itemIndex / this.itemsPerPage);
  }
}

var helper = new PaginationHelper(["a", "b", "c", "d", "e", "f"], 4);
console.log(helper.pageCount()); // should == 2
console.log(helper.itemCount()); // should == 6
console.log(helper.pageItemCount(0)); // should == 4
console.log(helper.pageItemCount(1)); // last page - should == 2
console.log(helper.pageItemCount(2)); // should == -1 since the page is invalid

// pageIndex takes an item index and returns the page that it belongs on
console.log(123123123, helper.pageIndex(0));
console.log(helper.pageIndex(5)); // should == 1 (zero based index)
console.log(helper.pageIndex(2)); // should == 0
console.log(helper.pageIndex(20)); // should == -1
console.log(helper.pageIndex(-10)); // should == -1
