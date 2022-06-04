//enables button to select tables
const cn = document.querySelector('#mandarin');
const ct = document.querySelector('#cantonese');
const hkn = document.querySelector('#hokkien');

document.querySelector('#mandarinBtn').addEventListener('click', mandarinBtn)
document.querySelector('#cantoneseBtn').addEventListener('click', cantoneseBtn)
document.querySelector('#hokkienBtn').addEventListener('click', hokkienBtn)

function mandarinBtn() {
     cn.classList.toggle('hidden')
     ct.classList.add('hidden')
     hkn.classList.add('hidden')
}

function cantoneseBtn() {
     cn.classList.add('hidden')
     ct.classList.toggle('hidden')
     hkn.classList.add('hidden')
}

function hokkienBtn() {
     cn.classList.add('hidden')
     ct.classList.add('hidden')
     hkn.classList.toggle('hidden')
}


//submit button




//iterates through tables selected and compares C1 of each
//var table = document.getElementById("mytab1");
//for (var i = 0, cell; cell = table.cells[i]; i++) {
     //iterate through cells
     //cells would be accessed using the "cell" variable assigned in the for loop
//}


//if the same 




//if an entry exclusive to either T1 or T2




/*
Forming Language Objects
 */



//let personalIPATable = cantoneseConsonants.filter( {

//});
/*
const mandarinConsonants = [
     {IPA: 'ɕ', Symbols: 'x/ㄒ', Examples: '西' },
     {IPA: 'f', Symbols: 'f/ㄈ', Examples: '非' },
     {IPA: 'j', Symbols: 'y-/i-/一', Examples: '牙' },
     {IPA: 'k', Symbols: 'g/ㄍ', Examples: '干' },
     {IPA: 'kʰ', Symbols: 'k/ㄎ', Examples: '口' },
     {IPA: 'l', Symbols: 'l/ㄌ', Examples: '了' },
     {IPA: 'm', Symbols: 'm/ㄇ', Examples: '明' },
     {IPA: 'n', Symbols: 'n/ㄋ/ㄣ/ㄢ', Examples: '你' },
     {IPA: 'ŋ', Symbols: '-ng/ㄥ/ㄤ', Examples: '江' },
     {IPA: 'p', Symbols: 'b/ㄅ', Examples: '包' },
     {IPA: 'pʰ', Symbols: 'p/ㄆ', Examples: '旁' },
     {IPA: 'ʐ', Symbols: 'r-/ㄖ', Examples: '日' },
     {IPA: 's', Symbols: 's/ㄙ', Examples: '私' },
     {IPA: 'ʂ', Symbols: 'sh/ㄕ', Examples: '失' },
     {IPA: 't', Symbols: 'd/ㄉ', Examples: '但' },
     {IPA: 'tʰ', Symbols: 't/ㄊ', Examples: '透' },
     {IPA: 'tɕ', Symbols: 'j/ㄐ', Examples: '叫' },
     {IPA: 'tɕʰ', Symbols: 'q/ㄑ', Examples: '去' },
     {IPA: 'ts', Symbols: 'z/ㄗ', Examples: '子' },
     {IPA: 'tsʰ', Symbols: 'c/ㄘ', Examples: '此' },
     {IPA: 'ʈʂ', Symbols: 'zh/ㄓ', Examples: '之' },
     {IPA: 'ʈʂʰ', Symbols: 'ch/ㄔ', Examples: '吃' },
     {IPA: 'w', Symbols: 'w-/u-/ㄨ', Examples: '我' },
     {IPA: 'x', Symbols: 'h/ㄏ', Examples: '火' },
     {IPA: 'ɥ', Symbols: 'yu-/-ü-/ㄩ', Examples: '月' },
     ]

const cantoneseConsonants = [
    {IPA: 'f', Symbols: 'f/ㄈ', Examples: '客' },
    {IPA: 'h', Symbols: 'h/ㄏ', Examples: '虎' },
    {IPA: 'j', Symbols: 'j/一', Examples: '月' },
    {IPA: 'k', Symbols: 'g-/ㄍ', Examples: '家' },
    {IPA: 'k̚', Symbols: '-k/-ㄎ', Examples: '識' },
    {IPA: 'kʰ', Symbols: 'k-/ㄎ-', Examples: '卡' },
    {IPA: 'kʷ', Symbols: 'gw/ㄍㄨ', Examples: '瓜' },
    {IPA: 'kʷʰ', Symbols: 'kw/ㄎㄨ', Examples: '誇' },
    {IPA: 'l', Symbols: 'l/ㄌ', Examples: '落' },
    {IPA: 'm̩', Symbols: 'm/ㄇ', Examples: '莫/唔' },
    {IPA: 'n', Symbols: 'n/ㄋ', Examples: '男' },
    {IPA: 'ŋ', Symbols: 'ng/ㄫ ', Examples: '牙' },
    {IPA: 'p', Symbols: 'b/ㄅ', Examples: '班' },
    {IPA: 'p̚', Symbols: '-p/-ㄆ', Examples: '濕' },
    {IPA: 'pʰ', Symbols: 'p-/ㄆ-', Examples: '拍' },
    {IPA: 's', Symbols: 's/ㄙ/ㄒ', Examples: '西' },
    {IPA: 't', Symbols: 'd/ㄉ', Examples: '打' },
    {IPA: 't̚', Symbols: '-t/-ㄊ', Examples: '失' },
    {IPA: 'tʰ', Symbols: 't-/ㄊ-', Examples: '拖' },
    {IPA: 'ts', Symbols: 'z/ㄗ/ㄐ', Examples: '將' },
    {IPA: 'tsʰ', Symbols: 'c/ㄘ/ㄑ', Examples: '鏘' },
    {IPA: 'w', Symbols: 'w/ㄨ', Examples: '活' },
    {IPA: 'ŋ̩', Symbols: 'ng/ㄫ ', Examples: '五' },
]
*{IPA: 'm̩', Symbols: 'm/ㄇ', Examples: '莫/唔' }, syllabized vs non hence 2 characters
*/


/*
const Consonants = [
     {IPA: '', Symbols: '', Examples: '' },
     {IPA: '', Symbols: '', Examples: '' },
     {IPA: '', Symbols: '', Examples: '' },
     {IPA: '', Symbols: '', Examples: '' },
     {IPA: '', Symbols: '', Examples: '' },
     {IPA: '', Symbols: '', Examples: '' },
     {IPA: '', Symbols: '', Examples: '' },
     {IPA: '', Symbols: '', Examples: '' },
     {IPA: '', Symbols: '', Examples: '' },
     {IPA: '', Symbols: '', Examples: '' },
     {IPA: '', Symbols: '', Examples: '' },
     {IPA: '', Symbols: '', Examples: '' },
     {IPA: '', Symbols: '', Examples: '' },
     {IPA: '', Symbols: '', Examples: '' },
     {IPA: '', Symbols: '', Examples: '' },
     {IPA: '', Symbols: '', Examples: '' },
     {IPA: '', Symbols: '', Examples: '' },
     {IPA: '', Symbols: '', Examples: '' },
     {IPA: '', Symbols: '', Examples: '' },
     {IPA: '', Symbols: '', Examples: '' },
]
*/
/*
function tableCombiner(table1, table2) {
     let combinedTable = {};
     //clone table1 into combineTable
     for (IPA in table1) {
          if (!combinedTable[IPA]) {
               combinedTable[IPA] = {};
          }
          for (label in table1[IPA]){
               combinedTable[IPA][label] ? combinedTable[IPA][label] = combinedTable[IPA][label] + ", " + table1[IPA][label] : combinedTable[IPA][label] = table1[IPA][label];
          }
     }
     //combine table2 with combinedTable
     for (IPA in table2) {
          if (!combinedTable[IPA]) {
               combinedTable[IPA] = {};
          }
          for (label in table2[IPA]){
               combinedTable[IPA][label] ? combinedTable[IPA][label] = combinedTable[IPA][label] + ", " + table2[IPA][label] : combinedTable[IPA][label] = table2[IPA][label];
          }
     }
     return combinedTable;
}
console.table(tableCombiner(mandarinConsonants, cantoneseConsonants));
*/

//make a it a function with two inputs, tableComibiner(customizedTable, cantoneseConsonants) {}
let customizedTable = mandarinConsonants;
for(i = 0; i <= customizedTable[customizedTable.length - 1 ]; i++) {
     for (j = 0; j <= cantoneseConsonants[cantoneseConsonants.length - 1]; j++) {
          if (customizedTable[i].IPA === cantoneseConsonants[j].IPA) {
               customizedTable[IPA][label] = customizedTable[IPA][label] + ", " + cantoneseConsonants[IPA][label];
               break;
          } 


for(j = 0; j <= cantoneseConsonants[cantoneseConsonants.length - 1]; j++) {
     for(i = 0; i <= customizedTable[customizedTable.length - 1 ]; i++) {
          let count = 0;
          if(cantoneseConsonants[j].IPA !== customizedTable[i]) {
               countt++;
               if (count === customizedTable.length) {
                    customizedTable.push(cantoneseConsonants[j]);
               }
          }
     }
}
console.table(customizedTable);

      



/* FOR THE FOLLOWING TO WORK, 
1) CLONE TABLE 1 INTO THE CUSTOMIZED TABLE
2) ITERATE THROUGH THE SECOND TABLE AND SEE IF THE ELEMENTS EXIST IN THE CUSTOMIZED TABLE
     A) if they do exist: delete the corresponding table[i].IPA and then combine those elements with a comma in between them
     B) if they do NOT exist: ADD THE ONES THAT AREN'T THERE
*/
/*
let customizedTable = mandarinConsonants;
for(i = 0; i <= customizedTable[customizedTable.length - 1 ]; i++) {
     if (for IPA in cantoneseConsonants) 
          cantoneseConsonants.IPA.includes(customizedTable[i].IPA)}
     )
}
*/

const mandarinConsonants = [
     {IPA: 'ɕ', Symbols: 'x/ㄒ', Examples: '西' },
     {IPA: 'f', Symbols: 'f/ㄈ', Examples: '非' },
     {IPA: 'j', Symbols: 'y-/i-/一', Examples: '牙' },
     {IPA: 'k', Symbols: 'g/ㄍ', Examples: '干' },
     {IPA: 'kʰ', Symbols: 'k/ㄎ', Examples: '口' },
     {IPA: 'l', Symbols: 'l/ㄌ', Examples: '了' },
     {IPA: 'm', Symbols: 'm/ㄇ', Examples: '明' },
     {IPA: 'n', Symbols: 'n/ㄋ/ㄣ/ㄢ', Examples: '你' },
     {IPA: 'ŋ', Symbols: '-ng/ㄥ/ㄤ', Examples: '江' },
     {IPA: 'p', Symbols: 'b/ㄅ', Examples: '包' },
     {IPA: 'pʰ', Symbols: 'p/ㄆ', Examples: '旁' },
     {IPA: 'ʐ', Symbols: 'r-/ㄖ', Examples: '日' },
     {IPA: 's', Symbols: 's/ㄙ', Examples: '私' },
     {IPA: 'ʂ', Symbols: 'sh/ㄕ', Examples: '失' },
     {IPA: 't', Symbols: 'd/ㄉ', Examples: '但' },
     {IPA: 'tʰ', Symbols: 't/ㄊ', Examples: '透' },
     {IPA: 'tɕ', Symbols: 'j/ㄐ', Examples: '叫' },
     {IPA: 'tɕʰ', Symbols: 'q/ㄑ', Examples: '去' },
     {IPA: 'ts', Symbols: 'z/ㄗ', Examples: '子' },
     {IPA: 'tsʰ', Symbols: 'c/ㄘ', Examples: '此' },
     {IPA: 'ʈʂ', Symbols: 'zh/ㄓ', Examples: '之' },
     {IPA: 'ʈʂʰ', Symbols: 'ch/ㄔ', Examples: '吃' },
     {IPA: 'w', Symbols: 'w-/u-/ㄨ', Examples: '我' },
     {IPA: 'x', Symbols: 'h/ㄏ', Examples: '火' },
     {IPA: 'ɥ', Symbols: 'yu-/-ü-/ㄩ', Examples: '月' },
     ]

const cantoneseConsonants = [
     {IPA: 'f', Symbols: 'f/ㄈ', Examples: '客' },
     {IPA: 'h', Symbols: 'h/ㄏ', Examples: '虎' },
     {IPA: 'j', Symbols: 'j/一', Examples: '月' },
     {IPA: 'k', Symbols: 'g-/ㄍ', Examples: '家' },
     {IPA: 'k̚', Symbols: '-k/-ㄎ', Examples: '識' },
     {IPA: 'kʰ', Symbols: 'k-/ㄎ-', Examples: '卡' },
     {IPA: 'kʷ', Symbols: 'gw/ㄍㄨ', Examples: '瓜' },
     {IPA: 'kʷʰ', Symbols: 'kw/ㄎㄨ', Examples: '誇' },
     {IPA: 'l', Symbols: 'l/ㄌ', Examples: '落' },
     {IPA: 'm̩', Symbols: 'm/ㄇ', Examples: '莫/唔' },
     {IPA: 'n', Symbols: 'n/ㄋ', Examples: '男' },
     {IPA: 'ŋ', Symbols: 'ng/ㄫ ', Examples: '牙' },
     {IPA: 'p', Symbols: 'b/ㄅ', Examples: '班' },
     {IPA: 'p̚', Symbols: '-p/-ㄆ', Examples: '濕' },
     {IPA: 'pʰ', Symbols: 'p-/ㄆ-', Examples: '拍' },
     {IPA: 's', Symbols: 's/ㄙ/ㄒ', Examples: '西' },
     {IPA: 't', Symbols: 'd/ㄉ', Examples: '打' },
     {IPA: 't̚', Symbols: '-t/-ㄊ', Examples: '失' },
     {IPA: 'tʰ', Symbols: 't-/ㄊ-', Examples: '拖' },
     {IPA: 'ts', Symbols: 'z/ㄗ/ㄐ', Examples: '將' },
     {IPA: 'tsʰ', Symbols: 'c/ㄘ/ㄑ', Examples: '鏘' },
     {IPA: 'w', Symbols: 'w/ㄨ', Examples: '活' },
     {IPA: 'ŋ̩', Symbols: 'ng/ㄫ ', Examples: '五' },
 ]
 //*{IPA: 'm̩', Symbols: 'm/ㄇ', Examples: '莫/唔' }, syllabized vs non hence 2 characters

 /*
combinedTableShouldBe = [
    {IPA: 'ɕ', Symbols: 'x/ㄒ', Examples: '西' },
    {IPA: 'f', Symbols: 'f/ㄈ', Examples: '非, 客' },
    {IPA: 'j', Symbols: 'y-/i-/一, j/一', Examples: '牙, 月' },
    {IPA: 'k', Symbols: 'g/ㄍ, g-/ㄍ', Examples: '干, 家' },
    {IPA: 'kʰ', Symbols: 'k/ㄎ, k-/ㄎ-', Examples: '口, 卡' },
    {IPA: 'l', Symbols: 'l/ㄌ, l/ㄌ', Examples: '了, 落' },
    {IPA: 'm', Symbols: 'm/ㄇ', Examples: '明' },
    {IPA: 'n', Symbols: 'n/ㄋ/ㄣ/ㄢ, n/ㄋ', Examples: '你, 男' },
    {IPA: 'ŋ', Symbols: '-ng/ㄥ/ㄤ, ng/ㄫ', Examples: '江, 牙' },
    {IPA: 'p', Symbols: 'b/ㄅ, b/ㄅ', Examples: '包, 班' },
    {IPA: 'pʰ', Symbols: 'p/ㄆ, p-/ㄆ-', Examples: '旁, 拍' },
    {IPA: 'ʐ', Symbols: 'r-/ㄖ', Examples: '日' },
    {IPA: 's', Symbols: 's/ㄙ, s/ㄙ/ㄒ', Examples: '私, 西' },
    {IPA: 'ʂ', Symbols: 'sh/ㄕ', Examples: '失' },
    {IPA: 't', Symbols: 'd/ㄉ, d/ㄉ', Examples: '但, 打' },
    {IPA: 'tʰ', Symbols: 't/ㄊ, t-/ㄊ-', Examples: '透, 拖' },
    {IPA: 'tɕ', Symbols: 'j/ㄐ', Examples: '叫' },
    {IPA: 'tɕʰ', Symbols: 'q/ㄑ', Examples: '去' },
    {IPA: 'ts', Symbols: 'z/ㄗ, z/ㄗ/ㄐ', Examples: '子, 將' },
    {IPA: 'tsʰ', Symbols: 'c/ㄘ, c/ㄘ/ㄑ', Examples: '此, 鏘' },
    {IPA: 'ʈʂ', Symbols: 'zh/ㄓ', Examples: '之' },
    {IPA: 'ʈʂʰ', Symbols: 'ch/ㄔ', Examples: '吃' },
    {IPA: 'w', Symbols: 'w-/u-/ㄨ, w/ㄨ', Examples: '我, 活' },
    {IPA: 'x', Symbols: 'h/ㄏ', Examples: '火' },
    {IPA: 'ɥ', Symbols: 'yu-/-ü-/ㄩ', Examples: '月' },
    {IPA: 'h', Symbols: 'h/ㄏ', Examples: '虎' },
    {IPA: 'k̚', Symbols: '-k/-ㄎ', Examples: '識' },
    {IPA: 'kʷ', Symbols: 'gw/ㄍㄨ', Examples: '瓜' },
    {IPA: 'kʷʰ', Symbols: 'kw/ㄎㄨ', Examples: '誇' },    
    {IPA: 'm̩', Symbols: 'm/ㄇ', Examples: '莫/唔' },
    {IPA: 'p̚', Symbols: '-p/-ㄆ', Examples: '濕' },
    {IPA: 't̚', Symbols: '-t/-ㄊ', Examples: '失' },
    {IPA: 'm̩', Symbols: 'm/ㄇ', Examples: '唔' },
    {IPA: 'ŋ̩', Symbols: 'ng/ㄫ ', Examples: '五' },
]
idealCombinedTable = [
    {IPA: 'ɕ', Symbols: 'x/ㄒ', Examples: '西' },
    {IPA: 'f', Symbols: 'f/ㄈ', Examples: '非, 客' },
    {IPA: 'h', Symbols: 'h/ㄏ', Examples: '虎' },
    {IPA: 'j', Symbols: 'y-/i-/一, j/一', Examples: '牙, 月' },
    {IPA: 'k', Symbols: 'g/ㄍ, g-/ㄍ', Examples: '干, 家' },
    {IPA: 'k̚', Symbols: '-k/-ㄎ', Examples: '識' },
    {IPA: 'kʰ', Symbols: 'k/ㄎ, k-/ㄎ-', Examples: '口, 卡' },
    {IPA: 'kʷ', Symbols: 'gw/ㄍㄨ', Examples: '瓜' },
    {IPA: 'kʷʰ', Symbols: 'kw/ㄎㄨ', Examples: '誇' },
    {IPA: 'l', Symbols: 'l/ㄌ, l/ㄌ', Examples: '了, 落' },
    {IPA: 'm', Symbols: 'm/ㄇ', Examples: '明' },
    {IPA: 'm̩', Symbols: 'm/ㄇ', Examples: '莫/唔' },
    {IPA: 'n', Symbols: 'n/ㄋ/ㄣ/ㄢ, n/ㄋ', Examples: '你, 男' },
    {IPA: 'ŋ', Symbols: '-ng/ㄥ/ㄤ, ng/ㄫ', Examples: '江, 牙' },
    {IPA: 'ŋ̩', Symbols: 'ng/ㄫ ', Examples: '五' },
    {IPA: 'p', Symbols: 'b/ㄅ, b/ㄅ', Examples: '包, 班' },
    {IPA: 'p̚', Symbols: '-p/-ㄆ', Examples: '濕' },
    {IPA: 'pʰ', Symbols: 'p/ㄆ, p-/ㄆ-', Examples: '旁, 拍' },
    {IPA: 'ʐ', Symbols: 'r-/ㄖ', Examples: '日' },
    {IPA: 's', Symbols: 's/ㄙ, s/ㄙ/ㄒ', Examples: '私, 西' },
    {IPA: 'ʂ', Symbols: 'sh/ㄕ', Examples: '失' },
    {IPA: 't', Symbols: 'd/ㄉ, d/ㄉ', Examples: '但, 打' },
    {IPA: 't̚', Symbols: '-t/-ㄊ', Examples: '失' },
    {IPA: 'tʰ', Symbols: 't/ㄊ, t-/ㄊ-', Examples: '透, 拖' },
    {IPA: 'tɕ', Symbols: 'j/ㄐ', Examples: '叫' },
    {IPA: 'tɕʰ', Symbols: 'q/ㄑ', Examples: '去' },
    {IPA: 'ts', Symbols: 'z/ㄗ, z/ㄗ/ㄐ', Examples: '子, 將' },
    {IPA: 'tsʰ', Symbols: 'c/ㄘ, c/ㄘ/ㄑ', Examples: '此, 鏘' },
    {IPA: 'ʈʂ', Symbols: 'zh/ㄓ', Examples: '之' },
    {IPA: 'ʈʂʰ', Symbols: 'ch/ㄔ', Examples: '吃' },
    {IPA: 'w', Symbols: 'w-/u-/ㄨ, w/ㄨ', Examples: '我, 活' },
    {IPA: 'x', Symbols: 'h/ㄏ', Examples: '火' },
    {IPA: 'ɥ', Symbols: 'yu-/-ü-/ㄩ', Examples: '月' },
]
*/

function tableCombiner(table1, table2) {
     let combinedTable = [];
     //clone table1 into combineTable
     for (IPA in table1) {
          if (!combinedTable[IPA]) {
               combinedTable[IPA] = {};
          }
          for (label in table1[IPA]){
               combinedTable[IPA][label] ? combinedTable[IPA][label] = combinedTable[IPA][label] + ", " + table1[IPA][label] : combinedTable[IPA][label] = table1[IPA][label];
          }
     }
     //combine table2 with combinedTable
     for (IPA in table2) {
          if (!combinedTable[IPA]) {
               combinedTable[IPA] = {};
          }
          for (label in table2[IPA]){
               combinedTable[IPA][label] ? combinedTable[IPA][label] = combinedTable[IPA][label] + ", " + table2[IPA][label] : combinedTable[IPA][label] = table2[IPA][label];
          }
     }
     for (IPA in combinedTable) {
          console.log(`IPA: ${IPA}`)
          for (data in combinedTable[IPA]) {
              console.log(`${data} : ${combinedTable[IPA][data]}`)
          }
      }
     return combinedTable;
}
console.table(tableCombiner(mandarinConsonants, cantoneseConsonants));

//CONSIDER using array of arrays rather than objects
/*
const mandarinConsonants = {
     {IPA: 'ɕ', Symbols: 'x/ㄒ', Examples: '西' },
     {IPA: 'f', Symbols: 'f/ㄈ', Examples: '非' },
     {IPA: 'j', Symbols: 'y-/i-/一', Examples: '牙' },
     {IPA: 'k', Symbols: 'g/ㄍ', Examples: '干' },
     {IPA: 'kʰ', Symbols: 'k/ㄎ', Examples: '口' },
     {IPA: 'l', Symbols: 'l/ㄌ', Examples: '了' },
     {IPA: 'm', Symbols: 'm/ㄇ', Examples: '明' },
     {IPA: 'n', Symbols: 'n/ㄋ/ㄣ/ㄢ', Examples: '你' },
     {IPA: 'ŋ', Symbols: '-ng/ㄥ/ㄤ', Examples: '江' },
     {IPA: 'p', Symbols: 'b/ㄅ', Examples: '包' },
     {IPA: 'pʰ', Symbols: 'p/ㄆ', Examples: '旁' },
     {IPA: 'ʐ', Symbols: 'r-/ㄖ', Examples: '日' },
     {IPA: 's', Symbols: 's/ㄙ', Examples: '私' },
     {IPA: 'ʂ', Symbols: 'sh/ㄕ', Examples: '失' },
     {IPA: 't', Symbols: 'd/ㄉ', Examples: '但' },
     {IPA: 'tʰ', Symbols: 't/ㄊ', Examples: '透' },
     {IPA: 'tɕ', Symbols: 'j/ㄐ', Examples: '叫' },
     {IPA: 'tɕʰ', Symbols: 'q/ㄑ', Examples: '去' },
     {IPA: 'ts', Symbols: 'z/ㄗ', Examples: '子' },
     {IPA: 'tsʰ', Symbols: 'c/ㄘ', Examples: '此' },
     {IPA: 'ʈʂ', Symbols: 'zh/ㄓ', Examples: '之' },
     {IPA: 'ʈʂʰ', Symbols: 'ch/ㄔ', Examples: '吃' },
     {IPA: 'w', Symbols: 'w-/u-/ㄨ', Examples: '我' },
     {IPA: 'x', Symbols: 'h/ㄏ', Examples: '火' },
     {IPA: 'ɥ', Symbols: 'yu-/-ü-/ㄩ', Examples: '月' },
};
*/

/*
//attempt to use loops with objects, before switch to arrays
function tableCombiner(table1, table2) {
let customizedTable = table1;
for(i = 0; i <= customizedTable[customizedTable.length - 1 ]; i++) {
     for (j = 0; j <= table2[table2.length - 1]; j++) {
          if (customizedTable[i].IPA === table2[j].IPA) {
               customizedTable[IPA][label] = customizedTable[IPA][label] + ", " + table2[IPA][label];
               break;
          } 

    }
}
for(j = 0; j <= table2[table2.length - 1]; j++) {
     for(i = 0; i <= customizedTable[customizedTable.length - 1 ]; i++) {
          let count = 0;
          if(table2[j].IPA !== customizedTable[i]) {
               countt++;
               if (count === customizedTable.length) {
                    customizedTable.push(table2[j]);
               }
          }
     }
}
console.table(customizedTable);
}
tableCombiner(mandarinConsonants, cantoneseConsonants)
*/