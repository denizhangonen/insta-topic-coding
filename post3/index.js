/*  1 
    Kötü Kod vs İyi Kod    
    The Good The Bad The Ugly #1
    
    ### Görseller ###
*/

/*  2
    Hadi değişkenleri ekrana yazalım
    */

const foo = { total: 5000, currency: 'USD', shippingCost: '11.99' };
const bar = { total: 59, currency: 'TRY', shippingCost: '3.99' };
const fooBar = { total: 570, currency: 'USD', shippingCost: '11.99' };

/*  3
    Kötü Kod        
    ### Görseller ###‚
*/

// console.log(foo);
// console.log(bar);
// console.log(fooBar);

/*  4
    Neden Kötü?
    Konsolda değişkenlerin isimleri yer almamakta
    Daha fazla kod

    #Sonuç Görsel
*/

/*  5
    Neden İyi
  Konsolda değişken isimleri görebiliyoruz
  Daha az kod

  #Sonuç GÖrsel
*/

console.log({ foo, bar, fooBar });

/*
  5
  Final Screen
*/
