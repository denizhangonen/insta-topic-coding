// source: https://www.w3schools.com/jsref/obj_console.asp

/* 
    1.
    JavaScript
    Console 
    ### Görseller ###
*/

/* 
    2.
    JavaScript Console Object
    Console objesi ile tarayıcının debugging console'una
    erişim sağlayıp, aşağıdaki method'ları kullanabiliriz;

    assert()                info()	
    clear()	                log()	
    count()	                table()	
    error()                 time()		
    group()	                timeEnd()
    groupCollapsed()        trace()	
    groupEnd()              warn()
*/

// 3. console.log()
// console'da mesaj göterir.

console.log('@yazilimRobotu rocks!');

// 4. console.warn()
// console'da uyarı mesajı gösterir

console.warn('Johnny');

// 5. console.error()
// console'da hata mesajı gösterir

console.error('B goode!');

// 6. console.count()
// console'da method'un kaç defa çağırıldığını gösterir

for (let i = 0; i < 5; i++) {
  console.count();
}

// 7. time() & timeEnd()
// timer başlatılmasını ve sonlandırılması sağlar

console.time('pinkFloydTime');
for (let i = 0; i < 5000; i++) {
  // Who let the dogs out?
}
console.timeEnd('pinkFloydTime');

// 8. console.table()
// console'da tablo şeklinde veri gösterir

console.table({
  follow: '@yazilimRobotu',
  takipciSayisi: 'not much',
});
