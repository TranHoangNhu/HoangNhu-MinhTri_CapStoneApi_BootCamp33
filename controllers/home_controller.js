window.onload = function () {
    async function getDataProductApi(result) {
      try {
        let result = await axios({
          url: "https://shop.cyberlearn.vn/api/Product",
          method: "GET",
          //   responseType: 'json'
        });
        renderProductHome(result.data.content);
        console.log(result.data.content);
      } catch (error) {
        console.log("error: ", error);
      }
    }
    getDataProductApi();
  };