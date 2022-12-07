(async () => {
    const promise = await fetch('https://www.googleapis.com/books/v1/volumes?q=%E5%A4%8F%E7%9B%AE%E6%BC%B1%E7%9F%B3', {
        method:'GET',

    });
    console.log(promise);
})();