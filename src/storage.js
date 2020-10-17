export const storage = {
  list: [],

  save(id) {
    localStorage.setItem("ids", JSON.stringify(this.list));
    const temp = [id];
    const items = JSON.parse(localStorage.getItem("ids"));
    const found = items.includes(id);

    if (this.list === []) {
      this.list.push(items);
    }

    if (!found) {
      this.list.push(...temp);
      localStorage.setItem("ids", JSON.stringify(this.list));
    }
  },
};
