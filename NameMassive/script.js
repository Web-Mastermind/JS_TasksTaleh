const names = ["Michael", "Trevor", "Franklin", "Lamar", "Jimmy"];

function printWithIndex(name, index) {
  console.log(`Index: ${index}, Name: ${name}`);
}

names.forEach(printWithIndex);