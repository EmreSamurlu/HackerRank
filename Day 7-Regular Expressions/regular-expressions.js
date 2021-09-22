// re değişkeninde belirtilen kelime, diğer stringlerde ilk kelime olup olmadığı kontrol ediliyor.
/* 
var re = /^learn/;
var str1 = 'learn regular expressions';
var str2 = 'write regular expressions';

console.log(re.test(str1));
console.log(re.test(str2));
 */


// verilen ifadenin sonunda olup olmaığı kontrol edilir.
/* 
var re = /learn$/;
var str1 = 'learn regular expressions ';
var str2 = 'write regular expressions learn';

console.log(re.test(str1));
console.log(re.test(str2));
 */

// (*) koyulan yere farklı harfler denenir. learn - loarn - arn koşulu sağlar.
/* 
var re = /l*arn/;
var str1 = 'learn regular expressions ';
var str2 = 'write regular expressions loarn';
var str3 = 'write regular expressions arn';

console.log(re.test(str1));
console.log(re.test(str2));
console.log(re.test(str3));
 */

// köşeli parantez içindeki karakterler tek tek kabul edilir. 1 ve 2 kabul edilirken 3 kabul edilmedi. 
/* 
var re = /l[eao]arn/;
var str1 = 'learn regular expressions ';
var str2 = 'write regular expressions loarn';
var str3 = 'write regular expressions lıarn';

console.log(re.test(str1));
console.log(re.test(str2));
console.log(re.test(str3));
 */

//Belirtilen aralığa göre - ile eşleniklerin belirlenmesinde kullanılır. Örneğin [0-9] ifadesi bütün rakamlar ile eşlenir. Birleşik ifadeye örnek olarak [A-Za-z] ifadesi de bütün harflerle büyük küçük ayrımı yapmadan eşlenecektir.

/* 
var re = /l[a-z]arn/; 
// diğer örnek olarak -> [A-Za-z0-9] hepsi birleşik veya tek tek tanımlanabilir.
var str1 = 'learn regular expressions ';
var str2 = 'write regular expressions loarn';
var str3 = 'write regular expressions lnarn';

console.log(re.test(str1));
console.log(re.test(str2));
console.log(re.test(str3));
 */

//Belirtilen aralık harici bütün karakterlere eşlenir. Örnek olarak [^123a-z] ifadesi 1, 2, 3 sayıları ve bütün küçük harfler dışında bütün ifadelere eşlenir.
/* 
var re = /l[^a-z]arn/; 
var str1 = 'learn regular expressions ';
var str2 = 'write regular expressions loarn';
var str3 = 'write regular expressions l3arn';

console.log(re.test(str1));
console.log(re.test(str2));
console.log(re.test(str3));
 */


//“( )“
//İfadeyi gruplandırır, gruplandırılmış ifadelerine denk gelen kalıpları (en fazla 9 kalıp) saklar.

//Parantez içinde belirtilen karakterleri başvuru olarak tanımlar. İlk başvuruya \1 ile, ikinci başvuruya \2 gibi biçimlerde başvurulur. Örneğin, metniniz 1988, 1980, 1999, 1898 ve 1919 tarihlerini içersin. Aramanız (8)9\1 düzenli ifadesini kullanıyorsa, “898” sonucu bulunur.
/* 
var re = /(8)9\1/; 
var num1 = 89;
var num2 = 1898;
var num3 = 1999;

console.log(re.test(num1));
console.log(re.test(num2));
console.log(re.test(num3));
 */

// “|“
// Veya/yada anlamındadır, belirtilen iki ifadeyle ayrı ayrı eşlenebilir. Örneğin k(a|u)le ifadesi, “kale” ve “kule” ifadelerine eşlenir.

//“+“
//Kendinden önce gelen ifadenin bir veya daha fazla kullanımına eşlenir. Örnek olarak z+ ifadesi z, zz, zzz… ile eşlenir.


// “?“
// Kendinden önce gelen ifadenin 0 veya 1 tekrarıyla eşlenir.

// var re = /[a-z]?a/; // a ve a dan bir önceki harfi verir.

// “{ }“
// Kendinden önceki ifadenin belirlenen sayıda tekrarıyla eşlenir. Örneğin a[0-5]{2} ifadesi a harfi ile başlayıp yanında 0 ile 5 arasında 2 tane rakam olan, a12, a24, a14 gibi ifadelerle eşlenir.
/* 
var re = /l[a-z]{4}/; 
var str1 = 'learn regular expressions ';
var str2 = 'write regular expressions loarn';
var str3 = 'write regular expressions l3arn';

console.log(re.exec(str1));
console.log(str2.match(re));
console.log(re.test(str3));
 */
//* Karakter Etiketleri

// “\d“
// [0-9] herhangi bir rakam

// “\D“
// [^0-9] rakam olmayan herhangi bir ifade

// “\w“
// [a-zA-Z0-9_] türkçe harfler hariç, alfanümerik herhangi bir harf, rakam veya alt çizgi.

// “\W“
// [^a-zA-Z0-9_] alfanümerik olmayan.

// “\s“
// [ \t\n\r\f] herhangi bir boşluk karakteri

// “\S“
// [^ \t\n\r\f] boşluk karakteri olmayan.

// g: küresel eşleşme.

// i: durumu yoksay.

// m: çok satırlı. Başlangıç (^) ve bitiş ($) karakterlerini birden çok satır üzerinde çalışıyormuş gibi ele alır.

// u: unicode. Deseni bir unicode kod noktaları dizisi olarak ele alın.

// y: yapışkan. Yalnızca hedef dizedeki bu normal ifadenin lastIndex özelliği tarafından belirtilen dizinden eşleşir.

//* regular expressions 1 - hackerrank
function regexVar() {
    //  ^ => first item matches:
    // () => stores matching value captured within
    // [aeiou] => matches any of the characters in the brackets
    // . => matches any character:
    // + => for 1 or more occurrances (this ensures str length > 3)
    // \1 => matches to previously stored match. 
    // \2 looks for matched item stored 2 instances ago 
    // \3 looks for matched item stored 3 ago, etc

    //  $ ensures that matched item is at end of the sequence

    let re = /^([aeiou]).+\1$/;
    return re;
}


/*
    function regexVar() {

        //  * Declare a RegExp object variable named 're'
        //  * It must match ALL occurrences of numbers in a string.
        
        let re = RegExp(/\d+/g)
        //  * Do not remove the return statement

        return re;
    }
*/