(function () {
  let footTables=document.querySelectorAll(".footer-table")
  let pages = document.querySelectorAll('#content .page');
  console.log(footTables)
//底部table的切换
  footTables.forEach(function (footTable,index) {
      footTable.addEventListener("click", function () {
          footTables.forEach(function (footTable,index) {
              footTable.classList.remove("active")
              pages[index].classList.remove('active')
          })
          this.classList.add("active")
          pages[index].classList.add('active')

      })

  })
})();
(function () {
    var swiper = new Swiper('.swiper-container', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
        }
    })
})();
(function () {
    var starItems = document.querySelectorAll('.ratemenu .starts span');
    var rating = 4.1;

    var on_num = Math.floor(rating); //全黄的星星的数量
    var half = rating - on_num;  //小数部分

    // 遍历
    starItems.forEach(function (startItem, index) {
        if (index < on_num) {
            startItem.classList.add('on');
        } else if (index < on_num + half) {
            startItem.classList.add('half');
        }
    });


})();