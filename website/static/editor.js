// Nick Minnard


let DEFAULT_TEMPLATE = {
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

// initialize editor page
function init() {

  // load starting template and generate points
  if($("#speech-data").attr("data-internalid") == "none") {
    speech = DEFAULT_TEMPLATE;
    load_and_render();
  }

  // load speech data
  else {
    speech = JSON.parse($("#stringified-data").attr("data-internalid"));
    load_and_render();
  }

  add_option_functionality();

}

// wipe all elements from speech section
function clear_points_container() {
  $(".point-group").remove();
  $(".section-divider").remove();
}

// update textarea field values in speech object
function update_point_input_values() {
  $(".point-group").each(function() {
    let i = $(this).find(".point-index").attr("data-index");
    speech.points[i].value = $(this).find("textarea").val();
  })
}

// name, value, level, prefix, index, mutable, section
function render_speech_from_template(template) {

  let current_section = template.points[0].section;

  // generate point elements
  template.points.forEach(function(p) {

    // handle section dividers
    if(p.section > current_section) {
      current_section = p.section;

      // add page rule to divide sections
      $("#points-container").append(
        $(document.createElement("hr"))
        .css("border-top", "5px dashed lightblue")
        .addClass("section-divider")
      )
    }

    // handle level
    let margin = "10px 0";
    let width = "100%";
    if(p.level === 2) {
      margin = "10px 5%";
      width = "95%";
    } else if(p.level === 3) {
      margin = "10px 10%";
      width = "90%";
    } else if(p.level === 4) {
      margin = "10px 15%";
      width = "85%";
    } else if(p.level === 5) {
      margin = "10px 20%";
      width = "80%";
    }

    $("#points-container").append(
      $(document.createElement("div"))
      .addClass("input-group point-group")

      // level
      .css("margin", margin)
      .css("width", width)
      .append(
        $(document.createElement("div"))
        .addClass("point-index")
        .attr("data-index", p.index)
      )
      .append(
        $(document.createElement("div"))
        .addClass("input-group-prepend")
        .append($(document.createElement("button"))
          .addClass("btn btn-light")

          // name and prefix
          .html(((p.prefix == "") ? "" : p.prefix) + p.name)
        )
      )
      .append($(document.createElement("textarea"))
        .addClass("form-control point-textarea")
        .attr("rows", "1")
        .css("resize", "none")
        .css("overflow", "hidden")

        // value
        .html(p.value)
      )
    )
  })

  // add textarea expanding behavior
  $(".point-textarea").each(function() {
    $(this).on("input", function() {
      $(this).css("height", "");
      $(this).css("height", Math.min($(this).prop('scrollHeight'), 1000) + "px");   
    })
  })

}

// update vals, reset speech points
function load_and_render() {
  update_point_input_values();
  regen_prefixes();
  clear_points_container();
  render_speech_from_template(speech);  
}

// go through each point and assign correct prefix
function regen_prefixes() {

  let tracker = [1, 1, 1, 1, 1]
  let last_level = 0;
  let last_section = 1;

  speech.points.forEach(function(p) {

    let this_level = p.level;

    // reset on body and conclusion sections
    if(last_section < p.section) {
      if(p.section == 3 || p.section == 6) {
        tracker = [1, 1, 1, 1, 1];
        last_section = p.section;
      }
    }

    // handle non-mutable points which don't have prefixes
    let mutable = true;
    if(["Specific Purpose", "Internal Preview", "Internal Summary", "Transition"].includes(p.name)) {
      mutable = false;
    }
    
    if(!(mutable)) {
      p.prefix = "";
    } else {
      p.prefix = getSymbol(tracker[this_level-1], this_level);
    }

    // staying on the same level or stepping down one level
    if(last_level === this_level || last_level === this_level - 1) {
      if(mutable) { tracker[this_level - 1]++; }
    }

    // stepping up one level
    else if(last_level - 1 === this_level) {
      if(mutable) { tracker[this_level - 1]++; }
      tracker[this_level] = 1; // reset level that was stepped up from
    }

    // stepping up multiple levels
    else if(last_level - 1 > this_level) {
      if(this_level === 1) {
        if(mutable) { tracker[0]++; }
        tracker[1] = 1; tracker[2] = 1; tracker[3] = 1; tracker[4] = 1;
      } else if(this_level === 2) {
        if(mutable) { tracker[1]++; }
        tracker[2] = 1; tracker[3] = 1; tracker[4] = 1;
      } tracker[3], tracker[4] = 1, 1;

    }

    last_level = this_level;

  })

}

// returns the correct symbol of a point given the sequence of the point and its level
function getSymbol(number, level) {

  // return roman numeral
  if(level === 1 || level === 5) {
    return romanize(number) + ". ";
  }
  
  // return capital letter
  else if(level === 2) {
    if(number <= 26) { return String.fromCharCode(96 + number).toUpperCase() + ". "; }
    else {
      let first = String.fromCharCode(96 + Math.floor(number / 26)).toUpperCase()
      let second = String.fromCharCode(96 + (number % 26)).toUpperCase()
      return first + second + ". ";
    }
  }
  
  // return lowercase letter
  else if(level === 4) {
    if(number <= 26) { return String.fromCharCode(96 + number) + ". "; }
    else {
      let first = String.fromCharCode(96 + Math.floor(number / 26))
      let second = String.fromCharCode(96 + (number % 26))
      return first + second + ". ";
    }
  }
  
  // return number
  else { return number + ". "; }

}

// get roman numeral prefixes
function romanize (integer) {

  // fancy method of converting integers to roman numerals I found from
  // https://blog.stevenlevithan.com/archives/javascript-roman-numeral-converter
  if(isNaN(integer)) {return NaN; }
  let digits = String(+integer).split(""), roman = "", i = 3;
  let key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
             "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
             "","I","II","III","IV","V","VI","VII","VIII","IX"];
  while(i--) {
    roman = (key[+digits.pop() + (i * 10)] || "") + roman; }
  return Array(+digits.join("") + 1).join("M") + roman;

}

// convert speech to json
function get_json() {
  let json_object = {
    "points" : []
  };
  //{name: "Specific Purpose", value: "", level: 1, prefix: "", index: 0, mutable: false, section: 1},
  speech.points.forEach(function(p) {
    json_object.points.push({
      "name": p.name,
      "value": p.value,
      "level": p.level,
      "prefix": p.prefix,
      "index": p.index,
      "mutable": p.mutable,
      "section": p.section
    })
  })
  return json_object;
}

// convert json to template
function load_template_from_json() {
  return;
}

// save speech to database
function save_speech() {
  console.log(get_json());
  fetch('/save-speech', {
    method: 'POST',
    body: JSON.stringify({
      speech_data: get_json(),
      speech_id: $("#speech-id").attr("data-internalid")
    })
  })
  .then((_res) => {
    window.location.href = "/editor";
  })
}

// add functionality to each side nav option
function add_option_functionality() {

  $("#save-speech-option").click(function() {
    load_and_render();
    save_speech();
  })

  $("#shift-point-up-option").click(function() {
    load_and_render();
    button_config_shift_up();
  })
  $("#shift-point-down-option").click(function() {
    load_and_render();
    button_config_shift_down();
  })
  $("#cancel-action-option").click(function() {
    load_and_render();
  })

}

// shift down config
function button_config_shift_down() {
  $(".point-group").each(function() {
    
    // get index of current point
    let i = $(this).find(".point-index").attr("data-index");

    // skip if point not mutable
    if(!(speech.points[i].mutable)) {
      return true
    }

    // skip if point is on final level
    if(speech.points[i].level === 5) {
      return true
    }
    
    // get index of previous point
    let prev = $(this).prev()
    let i_p = prev.find(".point-index").attr("data-index");

    // skip if point is right after divider
    if(prev[0] === undefined || prev.is("hr")) {
      return true
    }

    // add func if previous point is the same level or lower
    if(speech.points[i_p].level >= speech.points[i].level) {
      $(this).find("button").css("background-color", "lightgreen");
      $(this).find("button").click(function() {
        speech.points[i].level += 1;
        load_and_render();
      })
    }

  })
}

// shift up config
function button_config_shift_up() {
  $(".point-group").each(function() {
    
    // get index of current point
    let i = $(this).find(".point-index").attr("data-index");

    // skip if point not mutable
    if(!(speech.points[i].mutable)) {
      return true
    }

    // skip if point is on first level
    if(speech.points[i].level === 1) {
      return true
    }
    
    // get index of next point
    let next = $(this).next()
    let i_n = next.find(".point-index").attr("data-index");

    // skip if point is right after divider
    if((next[0] === undefined || next.is("hr")) ||
    (speech.points[i_n].level <= speech.points[i].level)) {
      $(this).find("button").css("background-color", "lightgreen");
      $(this).find("button").click(function() {
        speech.points[i].level -= 1;
        load_and_render();
      })
    }

  })
}

// add point config
function button_config_add_point() {
  return;
}

// rename point config
function button_config_rename_point() {
  return;
}

// section switch config
function button_config_switch_sections() {
  return;
}

// delete config
function button_config_delete() {
  return;
}
