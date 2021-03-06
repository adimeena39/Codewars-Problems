// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"

function DNAStrand(dna){
    //your code here
    return dna.split('').map((x,i)=> x==='A' ? 'T' : x==='T' ? 'A' : x==='G' ? 'C' : 'G' ).join('')
    
  }

  console.log(DNAStrand("ATGC"))