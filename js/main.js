document.querySelectorAll('.filter__block').forEach((block) => {
	block.querySelector('.filter__title').onclick = function () {
		this.closest('.filter__block').classList.toggle('filter__block_active')
		this.closest('.filter__block').querySelector('.filter__inputs_select').classList.toggle('filter__inputs_show')
	}
})

document.querySelectorAll('.filter__inputs input').forEach((input) => {

	input.onchange = function (e) {
		let dataFilter = this.getAttribute('data-filter')
		let thisInput = this;
		let arr = []
		let arrItems = []

		document.querySelectorAll('.filter__inputs input:checked').forEach((input2) => {
			
			if( input2.checked ){


				arr.push(input2.getAttribute('data-filter'))

				document.querySelectorAll('.main__block .item').forEach((item) => {
					item.classList.add('item_hide')
					item.classList.remove('item_show')
				})


				for(let i = 0; i < arr.length; i++){
					document.querySelectorAll('.main__block .item').forEach((item) => {


						for( let a = 0; a < item.getAttribute('data-filter-item').split(', ').length; a++ ){

							if( arr[i] == item.getAttribute('data-filter-item').split(', ')[a] ){
								item.classList.add('item_show')
							}

						}
					})
				}

				
			}

		})
		if( document.querySelectorAll('.filter__inputs input:checked').length == 0 ){
			document.querySelectorAll('.main__block .item').forEach((item) => {
				item.classList.remove('item_show')
				item.classList.remove('item_hide')
			})
		}

	}
})


document.querySelector('.main__filter .filter__top').onclick = function () {
	this.closest('.main__filter').querySelector('.filter__inner').classList.toggle('filter__inner_show')
}
































