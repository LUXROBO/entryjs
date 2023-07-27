'use strict';

/* eslint-disable */
var EntryStatic = {};

EntryStatic.objectTypes = ['sprite', 'textBox'];

EntryStatic.messageBlockList = ['when_message_cast', 'message_cast', 'message_cast_wait'];

EntryStatic.requiredTimes = [1, 2, 3, 4, 5];

// JYJ - 사이드 메뉴 항목 설정
EntryStatic.getAllBlocks = function () {

    console.log('getAllBlocks start')

    let blocks = EntryStatic.defaultModiBlocks

    let moduleList;
    // Entry.modiList = ['BATTERY', 'NETWORK', 'DIAL', 'MOTOR_A', 'MOTOR_B']

    console.log('getAllBlocks Entry.modiList 1' , `${Entry.modiList}`)

    if (Entry.modiList && Entry.modiList.length > 0) {
        console.log('getAllBlocks if1')
        moduleList = Entry.modiList //["BATTERY", "BUTTON", "IR", "LED"]
    } else {
        moduleList = EntryStatic.defaultModiList
        console.log('getAllBlocks if2')
        
    }

    // moduleList = moduleList.concat(EntryStatic.NetworkModule) // network 모듈은 기본으로 추가

    let HwBlocks = []
    moduleList.forEach(moduleItem => {

        if (moduleItem != "NETWORK") {
            HwBlocks = HwBlocks.concat(EntryStatic.moduleToBlocks[moduleItem])
        }

    })
    console.log('getAllBlocks HwBlocks : ', HwBlocks)
    // network 모듈은 마지막에 추가
    let networkList = EntryStatic.moduleToBlocks["NETWORK"]

    networkList.forEach(item => {
        HwBlocks = HwBlocks.concat(item)
    })

    // console.log('getAllBlocks EntryStatic.moduleToBlocks[moduleItem] : ', EntryStatic.moduleToBlocks["NETWORK"])
    

    blocks.push({ category: 'modi', blocks: HwBlocks })

    // console.log('getAllBlocks moduleList 3', blocks.length)
    // blocks.push(EntryStatic.moduleToBlocks["NETWORK"])
    // console.log('getAllBlocks blocks : ', JSON.stringify(Entry.modiList) )

    return blocks
};

EntryStatic.defaultModiBlocks = [
    {
        category: 'start',
        blocks: [
            'when_run_button_click',
        ],
    },
    {
        category: 'flow',
        blocks: [
            'wait_second',
            'repeat_basic',
            'repeat_inf',
            'repeat_while_true',
            'stop_repeat',
            '_if',
            'if_else',
        ],
    },
    {
        category: 'judgement',
        blocks: [
            'boolean_basic_operator',
            'boolean_and_or',
            'boolean_not'
        ],
    },
    {
        category: 'calc',
        blocks: [
            'calc_basic',
            'calc_rand',
        ],
    },
    {
        category: 'variable',
        blocks: [
            'variableAddButton',
            'get_variable',
            'change_variable',
            'set_variable',
        ],
    },
];

EntryStatic.defaultModiList = [
    "BUTTON",
    "DIAL",
    "TOF",
    "LED",
    "SPEAKER",
    "MOTORA",
    "MOTORB",
    "DISPLAY"
]

EntryStatic.NetworkModule = ["NETWORK"]

EntryStatic.moduleToBlocks = {
    
    BUTTON: [
        'HW_BTN_JUDGEMENT',
        'HW_BTN_VALUE',
        // 'HW_BTN_MENU',
    ],

    DIAL: [
        'HW_DIAL_JUDGEMENT',
        'HW_DIAL_MARK_JUDGEMENT',
        'HW_DIAL_VALUE',
    ],
   
    TOF: [
        'HW_TOF_JUDGEMENT',
        'HW_TOF_VALUE'
    ],
    LED: [
        'HW_LED_BASIC',
        'HW_LED_CUSTOM',
        'HW_LED_OFF',
    ],
    SPEAKER: [
        'HW_SPEAKER_TUNE',
        'HW_SPEAKER_MELODY',
        'HW_SPEAKER_OFF',
    ],

    MOTORA: [
        'HW_MOTOR_A',
        'HW_MOTOR_A_ANGLE',
        'HW_MOTOR_A_ANGLE_CHANGE',
        'HW_MOTOR_A_STOP',
    
    ],

    MOTORB: [
        'HW_MOTOR_B',
        'HW_MOTOR_B_ANGLE',
        'HW_MOTOR_B_ANGLE_CHANGE',
        'HW_MOTOR_B_STOP',
    ],
   
   
    DISPLAY: [
        'HW_DISPLAY_IMAGE',
        'HW_DISPLAY_TEXT',
        'HW_DISPLAY_DATA',
        'HW_DISPLAY_MOVE',
        'HW_DISPLAY_RESET',
    ],
    NETWORK: [
        'HW_NETWORK_BTN_JUDGEMENT',
        'HW_NETWORK_BTN',    
        'HW_NETWORK_SWITCH_JUDGEMENT',       
        'HW_NETWORK_SWITCH',  
        'HW_NETWORK_DIAL_JUDGEMENT',     
        'HW_NETWORK_DIAL',   
        'HW_NETWORK_JOYSTICK_JUDGEMENT',
        'HW_NETWORK_JOYSTICK',   
        'HW_NETWORK_SLIDER_JUDGEMENT',
        'HW_NETWORK_SLIDER',
        'HW_NETWORK_TIMER_JUDGEMENT',
        'HW_NETWORK_TIMER',
        'HW_NETWORK_BELL',
    ]
}

EntryStatic.getCategoryByBlock = function (blockName) {
    if (!blockName) {
        return false;
    }
    const allBlocks = EntryStatic.getAllBlocks();
    for (let i = 0, len = allBlocks.length; i < len; i++) {
        const blocks = allBlocks[i].blocks;
        if (blocks.indexOf(blockName) > -1) {
            return allBlocks[i].category;
        }
    }
    return false;
};

Object.defineProperty(EntryStatic, 'fonts', {
    get: function () {
        return [
            {
                name: Lang.Fonts.batang,
                family: 'KoPub Batang',
                url: '/css/kopubbatang.css',
                visible: false,
            },
            {
                name: Lang.Fonts.jeju_hallasan,
                family: 'Jeju Hallasan',
                url: '/css/jejuhallasan.css',
                visible: false,
            },
            {
                name: Lang.Fonts.gothic,
                family: 'Nanum Gothic',
                url: '/css/nanumgothic.css',
                visible: true,
            },
            {
                name: Lang.Fonts.myeongjo,
                family: 'Nanum Myeongjo',
                url: '/css/nanummyeongjo.css',
                visible: true,
            },
            {
                name: Lang.Fonts.pen_script,
                family: 'Nanum Pen Script',
                url: '/css/nanumpenscript.css',
                visible: true,
            },
            {
                name: Lang.Fonts.square_round,
                family: 'NanumSquareRound',
                url: '/css/square_round.css',
                visible: true,
            },
            {
                name: Lang.Fonts.gothic_coding,
                family: 'Nanum Gothic Coding',
                url: '/css/nanumgothiccoding.css',
                visible: true,
            },
            {
                name: Lang.Fonts.jalnan,
                family: 'yg-jalnan',
                url: '/css/jalnan.css',
                visible: true,
            },
            {
                name: Lang.Fonts.designhouse,
                family: 'designhouseOTFLight00',
                url: '/css/designhouse.css',
                visible: true,
            },
            {
                name: Lang.Fonts.dunggeunmo,
                family: 'DungGeunMo',
                url: '/css/dunggeunmo.css',
                visible: true,
            },
            {
                name: Lang.Fonts.uhbeemysen,
                family: 'UhBeemysen',
                url: '/css/uhbeemysen.css',
                visible: true,
            }
        ];
    },
});

EntryStatic.colorSet = {
    arrow: {
        default: {
            DEFAULT: '#FFFFFF',
            START: '#FFFFFF',
            FLOW: '#3A71BC',
            MOVING: '#8641B6',
            LOOKS: '#D8234E',
            TEXT: '#DC9C32',
            SOUND: '#83A617',
            JUDGE: '#89A1F7',
            CALC: '#E8B349',
            VARIABLE: '#CE38CE',
            HARDWARE: '#FFFFFF',
            EXPANSION: '#FF8888',
            HIDDEN: '#FFFFFF',
        },
    },
    block: {
        default: {
            START: '#00b400',
            FLOW: '#17a6d1',
            MOVING: '#ad3efb',
            LOOKS: '#ff3a61',
            BRUSH: '#fc7e01',
            TEXT: '#e43500',
            SOUND: '#67b100',
            JUDGE: '#4562f5',
            CALC: '#f4af18',
            VARIABLE: '#dd47d8',
            FUNC: '#de5c04',
            HARDWARE: '#00b6b1',
            EXPANSION: '#ef6d6d',
            HIDDEN: '#8aa3b2',
        },
        lighten: {
            START: '#3bce3b',
            FLOW: '#3bce3b',
            MOVING: '#bd65fb',
            LOOKS: '#ff5577',
            BRUSH: '#ff9831',
            TEXT: '#ff6739',
            SOUND: '#7ecc12',
            JUDGE: '#99adff',
            CALC: '#ffde82',
            VARIABLE: '#f778f3',
            FUNC: '#ff7b22',
            HARDWARE: '#78d5d3',
            EXPANSION: '#ffaeae',
            HIDDEN: '#ffaeae',
        },
        darken: {
            START: '#009400',
            FLOW: '#007ca2',
            MOVING: '#8b19db',
            LOOKS: '#c72042',
            BRUSH: '#c72042',
            TEXT: '#ad2800',
            SOUND: '#508a00',
            JUDGE: '#1b3ad8',
            CALC: '#ff7f00',
            VARIABLE: '#b819b3',
            FUNC: '#a14100',
            HARDWARE: '#008380',
            EXPANSION: '#c63f3f',
            HIDDEN: '#728997',
        },
        emphasize: {
            '#00b400': '#5BC982', //START
            '#17a6d1': '#62A5F4', //FLOW
            '#ad3efb': '#C08FF7', //MOVING
            '#ff3a61': '#F46487', //LOOKS
            '#fc7e01': '#FFB05A', //BRUSH
            '#e43500': '#F2C670', //TEXT
            '#67b100': '#C4DD31', //SOUND
            '#4562f5': '#C0CBFF', //JUDGE
            '#f4af18': '#FCDA90', //CALC
            '#dd47d8': '#F279F2', //VARIABLE
            '#de5c04': '#DD884E', //FUNC
            '#00b6b1': '#09BAB5', //HARDWARE
            //Not guided emphasize color for EXPANSION
        },
        modi: {
            OUTPUT: '#ff4547',
            OUTPUT_OUTLINE: '#d0292a',
            INPUT: '#00c08a',
            INPUT_OUTLINE: '#00935C',
            SETUP: '#FFC629',
            SETUP_OUTLINE: '#f97c00',
        }
    },
    common: {
        WHITE: '#FFFFFF',
        DARK: '#000000',
    },
};

EntryStatic.COMMAND_TYPES = {
    addThread: 101,
    destroyThread: 102,
    destroyBlock: 103,
    recoverBlock: 104,
    insertBlock: 105,
    separateBlock: 106,
    moveBlock: 107,
    cloneBlock: 108,
    uncloneBlock: 109,
    scrollBoard: 110,
    setFieldValue: 111,

    selectObject: 201,

    do: 301,
    undo: 302,
    redo: 303,
};

EntryStatic.getQuestionCategoryData = function () {
    return {
        category: 'dummy',
        blocks: [
            'hidden_event',
            'hidden_loop2',
            'hidden_if_else2',
            'hidden',
            'hidden_string',
            'hidden_boolean',
        ],
    };
};

// for server node js code
if (typeof exports === 'object') {
    exports.blockInfo = EntryStatic.blockInfo;
    exports.getAllBlocks = EntryStatic.getAllBlocks;
    exports.getCategoryByBlock = EntryStatic.getCategoryByBlock;
    exports.EntryStatic = EntryStatic;
}
