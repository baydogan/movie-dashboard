export function numberWithCommas(num) { //para birimlerini düzelmek için bir helper function
  {
    const num_parts = num.toString().split(".");
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return num_parts.join(".");
  }
}


