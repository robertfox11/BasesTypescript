(() => {
  interface Client {
    name: string;
    age?: number;
    address?: Address; //tomado de otra interfaces
    getFullAddress(id: string): void; //declaramos una funcinon en la interface para que la clase lo que realiza
  }
  //se recomeinta utilizar otra interfaces llamado address
  interface Address {
    id: number;
    zip: string;
    city: string;
  }
  const client: Client = {
    name: "Robert",
    age: 38,
    address: {
      id: 125,
      zip: "28963",
      city: "Otawa",
    },
    getFullAddress(id: string) {
      return this.address.city;
    },
  };
  const client2: Client = {
    name: "Melissa",
    age: 40,
    getFullAddress(id) {
      return this.address.city;
    },
  };
  console.log(client2.name);
})();
