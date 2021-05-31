let num = 50;

while (num < 55) {
    console.log(num);
    num++;
}

do {
    console.log (num);
    num++;
}
while (num < 60);

for (let i = 1; i < 8; i++) {
    if (i === 3) {
        continue;
    }

    if (i === 6) {
        break;
    }

    console.log (i);
}