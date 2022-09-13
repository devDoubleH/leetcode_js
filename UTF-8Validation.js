const validUtf8 = (data) => {
  let binary = data.map((i) => {
      let b = "00000000" + i.toString(2);
      return b.substring(b.length - 8);
  });

  let  current = 0;
  for(let i = 0; i < binary.length; i++){
    let bytes = binary[i].indexOf('0');
    if(current == 0){
      if(bytes == 0) continue;
      if(bytes > 4 || bytes < 2) retur false;
      current = bytes;
    }else{
      if(bytes != 1) return false;
    }
     current--;
  }

  return current == 0;
}
