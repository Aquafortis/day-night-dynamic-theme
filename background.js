/*! @preserve
 * Copyright (c) 2019 Aquafortis
 * Licensed under MPL-2.0 (https://github.com/Aquafortis/day-night-dynamic-theme)
 */
var currentAssets = "";
const changes = {
    "1": {
        "images": {
            "theme_frame": "images/1.png"
        },
        "colors": {
            "tab_background_text": "#fff",
            "button_background_hover": "#314b69",
            "tab_selected": "#314b69"
        }
    },
    "2": {
        "images": {
            "theme_frame": "images/2.png"
        },
        "colors": {
            "tab_background_text": "#000",
            "button_background_hover": "#efe7eb",
            "tab_selected": "#efe7eb"
        }
    },
    "3": {
        "images": {
            "theme_frame": "images/3.png"
        },
        "colors": {
            "tab_background_text": "#000",
            "button_background_hover": "#f1d199",
            "tab_selected": "#f1d199"
        }
    },
    "4": {
        "images": {
            "theme_frame": "images/4.png"
        },
        "colors": {
            "tab_background_text": "#000",
            "button_background_hover": "#f1d199",
            "tab_selected": "#f1d199"
        }
    },
    "5": {
        "images": {
            "theme_frame": "images/5.png"
        },
        "colors": {
            "tab_background_text": "#000",
            "button_background_hover": "#f1d199",
            "tab_selected": "#f1d199"
        }
    },
    "6": {
        "images": {
            "theme_frame": "images/6.png"
        },
        "colors": {
            "tab_background_text": "#000",
            "button_background_hover": "#f1d199",
            "tab_selected": "#f1d199"
        }
    },
    "7": {
        "images": {
            "theme_frame": "images/7.png"
        },
        "colors": {
            "tab_background_text": "#000",
            "button_background_hover": "#f1d199",
            "tab_selected": "#f1d199"
        }
    },
    "8": {
        "images": {
            "theme_frame": "images/8.png"
        },
        "colors": {
            "tab_background_text": "#000",
            "button_background_hover": "#f1d199",
            "tab_selected": "#f1d199"
        }
    },
    "9": {
        "images": {
            "theme_frame": "images/9.png"
        },
        "colors": {
            "tab_background_text": "#000",
            "button_background_hover": "#f1d199",
            "tab_selected": "#f1d199"
        }
    },
    "10": {
        "images": {
            "theme_frame": "images/10.png"
        },
        "colors": {
            "tab_background_text": "#000",
            "button_background_hover": "#f1d199",
            "tab_selected": "#f1d199"
        }
    },
    "11": {
        "images": {
            "theme_frame": "images/11.png"
        },
        "colors": {
            "tab_background_text": "#000",
            "button_background_hover": "#f1d199",
            "tab_selected": "#f1d199"
        }
    },
    "12": {
        "images": {
            "theme_frame": "images/12.png"
        },
        "colors": {
            "tab_background_text": "#fff",
            "button_background_hover": "#a87451",
            "tab_selected": "#a87451"
        }
    },
    "13": {
        "images": {
            "theme_frame": "images/13.png"
        },
        "colors": {
            "tab_background_text": "#fff",
            "button_background_hover": "#314b69",
            "tab_selected": "#314b69"
        }
    },
    "14": {
        "images": {
            "theme_frame": "images/14.png"
        },
        "colors": {
            "tab_background_text": "#fff",
            "button_background_hover": "#223449",
            "tab_selected": "#223449"
        }
    },
    "15": {
        "images": {
            "theme_frame": "images/15.png"
        },
        "colors": {
            "tab_background_text": "#fff",
            "button_background_hover": "#223449",
            "tab_selected": "#223449"
        }
    },
    "16": {
        "images": {
            "theme_frame": "images/16.png"
        },
        "colors": {
            "tab_background_text": "#fff",
            "button_background_hover": "#223449",
            "tab_selected": "#223449"
        }
    }
};

function setAssets(theme) {
    if (currentAssets === theme) {
        return;
    }
    currentAssets = theme;
    browser.theme.update(changes[theme]);
}

function checkNow() {
    let date = new Date();
    let hour = date.getHours();
    if (hour === 1) {
        setAssets("16");
    }
    else if (hour === 2) {
        setAssets("14");
    }
    else if (hour === 3) {
        setAssets("15");
    }
    else if (hour === 4) {
        setAssets("16");
    }
    else if (hour === 5) {
        setAssets("1");
    }
    else if (hour === 6) {
        setAssets("2");
    }
    else if (hour === 7) {
        setAssets("3");
    }
    else if (hour === 8) {
        setAssets("4");
    }
    else if (hour === 9) {
        setAssets("5");
    }
    else if (hour === 10) {
        setAssets("6");
    }
    else if (hour === 11) {
        setAssets("6");
    }
    else if (hour === 12) {
        setAssets("7");
    }
    else if (hour === 13) {
        setAssets("7");
    }
    else if (hour === 14) {
        setAssets("8");
    }
    else if (hour === 15) {
        setAssets("9");
    }
    else if (hour === 16) {
        setAssets("10");
    }
    else if (hour === 17) {
        setAssets("11");
    }
    else if (hour === 18) {
        setAssets("12");
    }
    else if (hour === 19) {
        setAssets("13");
    }
    else if (hour === 20) {
        setAssets("14");
    }
    else if (hour === 21) {
        setAssets("15");
    }
    else if (hour === 22) {
        setAssets("16");
    }
    else if (hour === 23) {
        setAssets("14");
    }
    else if (hour === 0) {
        setAssets("15");
    }
}
checkNow();
browser.alarms.onAlarm.addListener(checkNow);
browser.alarms.create("checkNow", {
    periodInMinutes: 5
});
