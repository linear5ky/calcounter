class UI {

  static addRow() {

    const element = document.createElement('div');
    element.setAttribute('class','wrap');    
    const html = `
      <input type="text" id="title" name=[calories] class="form-control" placeholder="Additional Colories">
      <a href="" class="add btn btn-primary"><i class="fas fa-plus"></i></a>
       <a href="" class="remove btn btn-primary"><i class="fas fa-minus"></i></a>
      `;

     element.innerHTML = html;
     document.querySelector('form').append(element);


     element.querySelector('.add').addEventListener('click', (e) => {
      this.addRow(e.target);
      e.preventDefault();
   
    });


     element.querySelector('.remove').addEventListener('click', (e) => {
       element.remove();
       this.getTotals();
       e.preventDefault();
    });


    element.querySelector('input').addEventListener('input', (e) => {
        this.getTotals();

    });
 
  }

  static deleteRow() {
    if(el.classList.contains('delete')) {
      el.parentElement.parentElement.remove();
      this.getTotals();

    }
  }

  static getTotals() {

      const forms = document.querySelectorAll('form');
      const form = forms[0];
      let sum =0;
      [...form.elements].forEach((input) => {
       
          sum += parseFloat(input.value);
          //console.log(input.value);
      });

      document.querySelector('.total h3 span').textContent = sum;
  }

}

document.querySelector('.add').addEventListener('click', (e) => {
   UI.addRow(e.target);
   e.preventDefault();
//console.log(this);
   
});



document.querySelector('input').addEventListener('input', (e) => {
   UI.getTotals(e.target);

});


