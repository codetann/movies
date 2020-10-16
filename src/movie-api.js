import Header from "./components/Home/Header";

const key = "64f2b3b60f4518d050113f7ae5a728b8";

export const api = {
  // --------------------------------------------------------------------
  async search(title) {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${key}`;
    try {
      const res = await fetch(
        `${url}&language=en-US&query=${title}&page=1&include_adult=true`
      );

      if (res.ok) {
        const data = await res.json();
        return data;
      }
    } catch (err) {
      console.log(err);
    }
  },
  // --------------------------------------------------------------------
  async trending() {
    const url = `https://api.themoviedb.org/3/trending/all/day?api_key=${key}`;
    try {
      const res = await fetch(url);

      if (res.ok) {
        const data = await res.json();
        return data;
      }
    } catch (err) {
      console.log(err);
    }
  },
  // --------------------------------------------------------------------
  getGenre(ids) {
    let list = [];
    for (let i = 0; i < ids.length; i++) {
      switch (ids[i]) {
        case 28:
          list.push("Action");
          break;
        case 12:
          list.push("Adventure");
          break;
        case 16:
          list.push("Animation");
          break;
        case 35:
          list.push("Comedy");
          break;
        case 80:
          list.push("Crime");
          break;
        case 99:
          list.push("Documentary");
          break;
        case 18:
          list.push("Drama");
          break;
        case 10751:
          list.push("Family");
          break;
        case 14:
          list.push("Fantasy");
          break;
        case 36:
          list.push("History");
          break;
        case 27:
          list.push("Horror");
          break;
        case 10402:
          list.push("Music");
          break;
        case 9648:
          list.push("Mystery");
          break;
        case 10749:
          list.push("Romance");
          break;
        case 878:
          list.push("Science Fiction");
          break;
        case 10770:
          list.push("TV Movie");
          break;
        case 53:
          list.push("Thriller");
          break;
        case 10752:
          list.push("War");
          break;
        case 37:
          list.push("Western");
          break;

        default:
          list.push("error");
          break;
      }
    }
    return list;
  },
};
