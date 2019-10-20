javascript:(function(){
  let val = "<value you would like to copy here>";

  navigator.clipboard.writeText(val)
    .then(() => {
      alert(`Value (${val}) copied succesfully`);
    })
    .catch((e) => {
      alert(e.message);
    });
}());
