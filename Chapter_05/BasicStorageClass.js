class basicStorage {
  constructor(Data) {
    this.storedData = Data;
  }

  set(x) {
    this.storedData = x;
  }

  get() {
    return this.storedData;
  }

}

var BS = new basicStorage(0);

// Setting BS
BS.set(10);
// Getting BS
console.log(BS.get()); // 10

// Also available Online at : https://codepen.io/k3no/pen/dVvoWr
