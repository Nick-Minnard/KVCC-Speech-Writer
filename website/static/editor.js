
let speech_outline_template = {
  points: [
    {name: "Specific Purpose", value: "", level: 1, prefix: "", index: 0, mutable: false, section: 1},



    {name: "Attention Getter", value: "", level: 1, prefix: "I", index: 1, mutable: false, section: 2},
    {name: "Reveal Topic", value: "", level: 1, prefix: "II", index: 2, mutable: false, section: 2},
    {name: "Establish Credibility", value: "", level: 1, prefix: "III", index: 3, mutable: false, section: 2},
    {name: "Relevancy Statement", value: "", level: 1, prefix: "IV", index: 4, mutable: false, section: 2},
    {name: "Thesis Statement", value: "", level: 1, prefix: "V", index: 5, mutable: false, section: 2},



    {name: "First Main Point", value: "", level: 1, prefix: "I", index: 6, mutable: true, section: 3},
    {name: "Internal Preview", value: "", level: 1, prefix: "", index: 7, mutable: false, section: 3},

    {name: "Subpoint", value: "", level: 2, prefix: "A", index: 8, mutable: true, section: 3},
    {name: "S-SP", value: "", level: 3, prefix: "1", index: 9, mutable: true, section: 3},
    {name: "SSSP", value: "", level: 4, prefix: "a", index: 10, mutable: true, section: 3},
    {name: "SSSP", value: "", level: 4, prefix: "b", index: 11, mutable: true, section: 3},
    {name: "S-SP", value: "", level: 3, prefix: "2", index: 12, mutable: true, section: 3},
    {name: "S-SP", value: "", level: 3, prefix: "3", index: 13, mutable: true, section: 3},

    {name: "Subpoint", value: "", level: 2, prefix: "B", index: 14, mutable: true, section: 3},
    {name: "S-SP", value: "", level: 3, prefix: "1", index: 15, mutable: true, section: 3},
    {name: "S-SP", value: "", level: 3, prefix: "2", index: 16, mutable: true, section: 3},

    {name: "Subpoint", value: "", level: 2, prefix: "C", index: 17, mutable: true, section: 3},
    {name: "S-SP", value: "", level: 3, prefix: "1", index: 18, mutable: true, section: 3},
    {name: "S-SP", value: "", level: 3, prefix: "2", index: 19, mutable: true, section: 3},

    {name: "Internal Summary", value: "", level: 1, prefix: "", index: 20, mutable: false, section: 3},
    {name: "Transition", value: "", level: 1, prefix: "", index: 21, mutable: false, section: 3},



    {name: "Second Main Point", value: "", level: 1, prefix: "II", index: 22, mutable: true, section: 4},
    {name: "Internal Preview", value: "", level: 1, prefix: "", index: 23, mutable: false, section: 4},

    {name: "Subpoint", value: "", level: 2, prefix: "A", index: 24, mutable: true, section: 4},
    {name: "S-SP", value: "", level: 3, prefix: "1", index: 25, mutable: true, section: 4},
    {name: "SSSP", value: "", level: 4, prefix: "a", index: 26, mutable: true, section: 4},
    {name: "SSSP", value: "", level: 4, prefix: "b", index: 27, mutable: true, section: 4},
    {name: "S-SP", value: "", level: 3, prefix: "2", index: 28, mutable: true, section: 4},
    {name: "S-SP", value: "", level: 3, prefix: "3", index: 29, mutable: true, section: 4},

    {name: "Subpoint", value: "", level: 2, prefix: "B", index: 30, mutable: true, section: 4},
    {name: "S-SP", value: "", level: 3, prefix: "1", index: 31, mutable: true, section: 4},
    {name: "S-SP", value: "", level: 3, prefix: "2", index: 32, mutable: true, section: 4},

    {name: "Subpoint", value: "", level: 2, prefix: "C", index: 33, mutable: true, section: 4},
    {name: "S-SP", value: "", level: 3, prefix: "1", index: 34, mutable: true, section: 4},
    {name: "S-SP", value: "", level: 3, prefix: "2", index: 35, mutable: true, section: 4},

    {name: "Internal Summary", value: "", level: 1, prefix: "", index: 36, mutable: false, section: 4},
    {name: "Transition", value: "", level: 1, prefix: "", index: 37, mutable: false, section: 4},



    {name: "Third Main Point", value: "", level: 1, prefix: "III", index: 38, mutable: true, section: 5},
    {name: "Internal Preview", value: "", level: 1, prefix: "", index: 39, mutable: false, section: 5},

    {name: "Subpoint", value: "", level: 2, prefix: "A", index: 40, mutable: true, section: 5},
    {name: "S-SP", value: "", level: 3, prefix: "1", index: 41, mutable: true, section: 5},
    {name: "SSSP", value: "", level: 4, prefix: "a", index: 42, mutable: true, section: 5},
    {name: "SSSP", value: "", level: 4, prefix: "b", index: 43, mutable: true, section: 5},
    {name: "S-SP", value: "", level: 3, prefix: "2", index: 44, mutable: true, section: 5},
    {name: "S-SP", value: "", level: 3, prefix: "3", index: 45, mutable: true, section: 5},

    {name: "Subpoint", value: "", level: 2, prefix: "B", index: 46, mutable: true, section: 5},
    {name: "S-SP", value: "", level: 3, prefix: "1", index: 47, mutable: true, section: 5},
    {name: "S-SP", value: "", level: 3, prefix: "2", index: 48, mutable: true, section: 5},

    {name: "Subpoint", value: "", level: 2, prefix: "C", index: 49, mutable: true, section: 5},
    {name: "S-SP", value: "", level: 3, prefix: "1", index: 50, mutable: true, section: 5},
    {name: "S-SP", value: "", level: 3, prefix: "2", index: 51, mutable: true, section: 5},

    {name: "Internal Summary", value: "", level: 1, prefix: "", index: 52, mutable: false, section: 5},
    {name: "Transition", value: "", level: 1, prefix: "", index: 53, mutable: false, section: 5},



    {name: "Summary of Main Points", value: "", level: 1, prefix: "", index: 54, mutable: false, section: 6},
    {name: "Closer", value: "", level: 1, prefix: "", index: 55, mutable: false, section: 6},
  ]
}

let speech = [];

function init() {
  // initialize editor page
  create_speech_outline();

}


// expanding textarea
// var textarea = jQuery('.textarea');
// textarea.on("input", function () {
//     jQuery(this).css("height", ""); //reset the height
//     jQuery(this).css("height", Math.min(jQuery(this).prop('scrollHeight'), 200) + "px");
// });

function create_speech_outline() {
  // create speech point elements

  if($("#speech-data").value == "empty") {
    // load new speech template
    return
  }

  else {
    // load stored speech template
    return
  }

}
