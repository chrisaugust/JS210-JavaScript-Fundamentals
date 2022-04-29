let i = 0;
while (i < 10) {
  if (i % 3 === 0) {
    console.log(i);
    // need to increment i by 1 or we'll end up in infinite loop
  }

  i += 1;
}
