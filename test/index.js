function getName(){
    console.log("hi priyanka")
}
getName()

function getAdress(){
    console.log("india")
} 
getAdress()

function email(){
    console.log("abggSggddd@gmail.com")
} 

// name: Create File in Test Directory
// on:
//   push:
//     branches:
//       - main
// jobs:
//   createFile:
//     name: Create A File
//     runs-on: ubuntu-latest
//     permissions:
//       contents: write
//     steps:
//       - uses: actions/checkout@v4
//       - uses: 1arp/create-a-file-action@0.4.5
//         with:
//           token: ${{ secrets.GITHUB_TOKEN }}
//           persist-credentials: false
//           fetch-depth: 0
//           path: 'src'
//           isAbsolutePath: false
//           file: 'foo.bar'
//           content: |
//             Hello
//             World
//       - name: Create File
//         run: |
//           mkdir -p cloc-test
//           echo "This is the content of the new file." > cloc-test/newFile.txt
//           echo pwd
//           ls -l
//       - name: Commit and Push Changes
//         run: |
//           git config --local user.name "github-actions[bot]"
//           git config --local user.email "github-actions[bot]@users.noreply.github.com"
//           git add cloc-test/newFile.txt
//           if ! git diff --quiet; then
//             git commit -m "Add new file to cloc-test directory"
//             git push origin main
//           else
//             echo "No changes to commit"
//             exit 0
//           fi