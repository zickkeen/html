class Hewan {
  constructor(jenis, suara, kaki){
    this.jenis = jenis;
    this.suara = suara;
    this.kaki = kaki;
  }

  deskripsikan(){
    return 'Adalah ' + this.jenis + ' berkaki ' + this.kaki + ' dan bersuara ' + this.suara;
  }
}

const rajawali = new Hewan('burung','kwak',2);

console.log(rajawali.deskripsikan());