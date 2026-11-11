/* Browser adaptation of super-market-billing.CPP.
   The stock file SHOP.DAT is represented by localStorage; receipt logic follows C++ math. */
window.runProject = async function (ui) {
  let products = ui.load('products', []);
  const save = () => ui.save('products', products);
  const find = no => products.find(p=>p.pno===no);
  async function readProduct(previous = null) {
    const pno = previous ? previous.pno : await ui.int('Please Enter The Product No. of The Product:',1,99999999);
    const name = await ui.text('Please Enter The Name of The Product:',49);
    const price = await ui.number('Please Enter The Price of The Product:',0.01,100000000);
    const dis = await ui.number('Please Enter The Discount (%):',0,100);
    return {pno,name,price,dis};
  }
  function show(p) {
    if(!p){ui.line('record not exist');return;}
    ui.line('The Product No. of The Product : '+p.pno);
    ui.line('The Name of The Product : '+p.name);
    ui.line('The Price of The Product : '+ui.money(p.price));
    ui.line('Discount : '+p.dis+'%');
  }
  function all() {
    ui.head('DISPLAY ALL RECORD');
    if(!products.length){ui.line('No products created.');return;}
    products.forEach(p=>{ui.rule();show(p);});
  }
  function menu() {
    ui.head('PRODUCT MENU');
    ui.line('P.NO.    NAME                        PRICE');ui.rule('=',63);
    products.forEach(p=>ui.line(String(p.pno).padEnd(9)+p.name.slice(0,28).padEnd(28)+'₹'+ui.money(p.price)));
    if(!products.length)ui.line('No products available. Go to Administrator → Create Product first.');
  }
  async function placeOrder(){
    menu();
    if(!products.length)return;
    ui.head('PLACE YOUR ORDER');
    const order=[];
    while(true){
      const id=await ui.int('Enter The Product No. Of The Product:',1,99999999);
      if(!find(id)){ui.line('Product not found. Please choose an existing product.');continue;}
      const quantity=await ui.int('Quantity in number:',1,100000);
      order.push({id,quantity});
      const more=await ui.pick('Do You Want To Order Another Product? (y/n):',['y','n']);
      if(more==='n')break;
      if(order.length>=50){ui.line('50-item limit reached.');break;}
    }
    ui.line('Thank You For Placing The Order');
    ui.head('INVOICE');
    ui.line('Pr No.  Name               Qty   Price     Amount    After discount');ui.rule('=',78);
    let total=0;
    order.forEach(item=>{
      const p=find(item.id);
      if(!p)return;
      const amount=p.price*item.quantity;
      const after=amount-(amount*p.dis/100);
      total+=after;
      ui.line(String(p.pno).padEnd(8)+p.name.slice(0,18).padEnd(19)+String(item.quantity).padEnd(6)+ui.money(p.price).padEnd(10)+ui.money(amount).padEnd(10)+ui.money(after));
    });
    ui.rule('=',78);
    ui.line('TOTAL = ₹'+ui.money(total));
  }
  async function adminMenu(){
    while(true){
      ui.screen('ADMIN MENU');
      ui.line('1. CREATE PRODUCT\n2. DISPLAY ALL PRODUCTS\n3. QUERY');
      ui.line('4. MODIFY PRODUCT\n5. DELETE PRODUCT\n6. VIEW PRODUCT MENU\n7. BACK TO MAIN MENU');
      const ch=await ui.int('Please Enter Your Choice (1-7):',1,7);
      if(ch===7)return;
      if(ch===1){const p=await readProduct();if(find(p.pno))ui.line('Product number already exists.');else{products.push(p);save();ui.line('The Product Has Been Created');}}
      else if(ch===2)all();
      else if(ch===6)menu();
      else {
        const id=await ui.int('Please Enter The Product No.:',1,99999999);
        const p=find(id);
        if(!p){ui.line('Record Not Found');continue;}
        if(ch===3)show(p);
        if(ch===4){Object.assign(p,await readProduct(p));save();ui.line('Record Updated');}
        if(ch===5){const yes=await ui.pick('Delete product '+id+'? (y/n):',['y','n']);if(yes==='y'){products=products.filter(x=>x.pno!==id);save();ui.line('Record Deleted ..');}}
      }
    }
  }
  ui.head('SUPER MARKET BILLING PROJECT');
  while(true){
    ui.screen('MAIN MENU');
    ui.line('01. CUSTOMER\n02. ADMINISTRATOR\n03. EXIT');
    const choice=await ui.int('Please Select Your Option (1-3):',1,3);
    if(choice===3){ui.line('Thanks for visiting!');return;}
    if(choice===1)await placeOrder();else await adminMenu();
  }
};
