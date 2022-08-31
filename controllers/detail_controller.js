
window.onload = function () {
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('productid');
    console.log('params',myParam)

    async function getDataQueryParam(result) {
        try {
          var result = await axios({
            url: "https://shop.cyberlearn.vn/api/Product/getbyid?id="+myParam,
            method: "GET",
            //   responseType: 'json'
          });
          renderProductDetail(result.data.content);
          console.log(result.data.content);
        } catch (error) {
          console.log("error: ", error);
        }
      }
    getDataQueryParam();
}