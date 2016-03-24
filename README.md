# js_helpers
In lieu of the NPM issues we all recently faced (as of 03/23/2016) this is a repo that will organize common helper functions to encourage people to use copy-paste rather than import a single-line package.

## Rules

1. COPY AND PASTE WHAT YOU NEED ONLY! Seriously. These aren't complicated, don't try to get clever with micro-packages.

2. I don't care about your needs so whatever is here is what you get.

3. If you work for NPM, you should pay me and other contributors to this for the resources I saved your company by posting these.

4. I'm not the best dev in the world. If you see issues, let me know. Better yet, send me a pull request and I'll look it over.

Read functions like `functionName(varName<type>)<returnType>` where `<?>` denotes any type and `<type1|type2>` denotes either type1 or type2 can be expected.

## Helpers
### Strings

`leftPad(oldString<string>, amount<int>, paddingCharacter<char>)<string>` - Add left-padding to a string (defaults to single space as the padding character)

`reverse(oldString<string>)<string>` - returns the reverse of the string

### Numbers

`isNegative(num<int|float>)<boolean>`

`isPositive(num<int|float>)<boolean>`

`isZero(num<int|float>)<boolean>`

The above should be self-descriptive.

`intOrZero(value<?>)<int>` - return the integer result of 'value', or it defaults to 0 if not possible.

`intOrDefault(value<?>, default<?>)<?>` - return the integer result of 'value', or it defaults to 'default' (note that this can be any type you wish)

### Math

`sum(numberArray<Array<int|float>>)<int|float>` - Sums the numbers within an array provided to the function. There are two (2) versions available; one that's optimal for tiny arrays and one for larger ones
