


type Address = {


}

type User3 = {
  id: number;
  name?: string;
  email?: string;
  address?: Address;
}

type User4 = {
  id: number;
  name?: string;
  email?: string;
}


const user4:Readonly<User4> = {
  id:1,
  name: 'tiger',
  email: 'tiger@naver.com'
}


// user4.id = 3;

// const user5:Required<User3> = {
//   id:1,
//   name: 'tiger',
//   email: 'tiger@naver.com'
//   // address: {
//   //   lat:20,
//   //   long:33.5
//   // }
// }


type ShallowPartial<T> = {
  [K in keyof T]? : T[K]

}

const user6:ShallowPartial<User3> = {
  name:'tiger',
  address: {
    lat:20,
    long:33.5
  }
}