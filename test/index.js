function getName(){
    console.log("hi priyanka")
}
getName()

function getAdress(){
    console.log("india")
} 
getAdress()

function email(){
    console.log("aggSggddfffffffffffffff@gmail.com")
} 

// name: Create File in Test Directory
// on:
//   push:
//     branches:
//       - main
//   workflow_dispatch:
// jobs:
//   create-file:
//     runs-on: ubuntu-latest
//     permissions:
//       contents: write
//     steps:
//       - uses: actions/checkout@v4
//       # - uses: 1arp/create-a-file-action@0.4.5
//       #   with:
//       #     token: ${{ secrets.GITHUB_TOKEN }}
//       #     persist-credentials: false
//       #     fetch-depth: 0
//       #     path: 'src'
//       #     isAbsolutePath: false
//       #     file: 'foo.bar'
//       #     content: |
//       #       Hello
//       #       World
//       - name: Create File in cloc test
//         run: |
//           mkdir -p json
//           echo "This is the content of the new file 1." > json/newFile.txt
//           echo pwd
//           ls -l
//       - name: Commit and Push Changes
//         env:
//           GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}

//         run: |
//           git config --local user.name "github-actions[bot]"
//           git config --local user.email "github-actions[bot]@users.noreply.github.com"
//           git add json/newFile.txt
//           git commit -m "Add new file to cloc-test directory"
//           git push origin main
          