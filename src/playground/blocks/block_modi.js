              'use strict';
Entry.MODI = {
    id: '16.1',
    name: 'modi',
    url: 'http://www.luxrobo.com/',
    imageName: 'modi.png',
    title: {
        ko: '모디',
        en: 'MODI',
    },
    setZero: function () {
        Entry.hw.sendQueue.moduleValue = {
            led: [],
            motor: [],
            speaker: [],
            display: [],
        };
        Entry.hw.sendQueue['getProperty'] = {};
        Entry.hw.getModule = {
            id: 0,
            property: 0,
        };
        Entry.hw.update();
    },
    initSend: function () {
        Entry.hw.sendQueue.moduleValue = {
            led: [],
            motor: [],
            speaker: [],
            display: [],
        };
        Entry.hw.sendQueue['getProperty'] = {};
        Entry.hw.getModule = {
            id: 0,
            property: 0,
        };
        Entry.hw.update();
    },
    getModule: {
        id: 0,
        property: 0,
    },
   
    dialList: function () {
        var list;
        var moduleData = Entry.hw.portData['module'] || {};

        if (moduleData['dial'] === undefined) {
            return [[Lang.Blocks.no_target, 'null']];
        }

        list = [];
        for (var i = 0; i < moduleData['dial'].length; i++) {
            if (moduleData['dial'][i]) list.push([i.toString(), i.toString()]);
        }
        return list;
    },
  
    buttonList: function () {
        var list;
        var moduleData = Entry.hw.portData['module'] || {};

        if (moduleData['button'] === undefined) {
            return [[Lang.Blocks.no_target, 'null']];
        }

        list = [];
        for (var i = 0; i < moduleData['button'].length; i++) {
            if (moduleData['button'][i]) list.push([i.toString(), i.toString()]);
        }
        return list;
    },
  
    motoraList: function () {
        var list;
        var moduleData = Entry.hw.portData['module'] || {};

        if (moduleData['motor_a'] === undefined) {
            return [[Lang.Blocks.no_target, 'null']];
        }
        list = [];
        for (var i = 0; i < moduleData['motor_a'].length; i++) {
            if (moduleData['motor_a'][i]) list.push([i.toString(), i.toString()]);
        }
        return list;
    },

    motorbList: function () {
        var list;
        var moduleData = Entry.hw.portData['module'] || {};

        if (moduleData['motor_b'] === undefined) {
            return [[Lang.Blocks.no_target, 'null']];
        }
        list = [];
        for (var i = 0; i < moduleData['motor_b'].length; i++) {
            if (moduleData['motor_b'][i]) list.push([i.toString(), i.toString()]);
        }
        return list;
    },
    ledList: function () {
        var list;
        var moduleData = Entry.hw.portData['module'] || {};

        if (moduleData['led'] === undefined) {
            return [[Lang.Blocks.no_target, 'null']];
        }

        list = [];
        for (var i = 0; i < moduleData['led'].length; i++) {
            if (moduleData['led'][i]) list.push([i, i]);
        }
        return list;
    },
    speakerList: function () {
        var list;
        var moduleData = Entry.hw.portData['module'] || {};

        if (moduleData['speaker'] === undefined) {
            return [[Lang.Blocks.no_target, 'null']];
        }

        list = [];
        for (var i = 0; i < moduleData['speaker'].length; i++) {
            if (moduleData['speaker'][i]) list.push([i.toString(), i.toString()]);
        }
        return list;
    },
    displayList: function () {
        var list;
        var moduleData = Entry.hw.portData['module'] || {};

        if (moduleData['display'] === undefined) {
            return [[Lang.Blocks.no_target, 'null']];
        }

        list = [];
        for (var i = 0; i < moduleData['display'].length; i++) {
            if (moduleData['display'][i]) list.push([i.toString(), i.toString()]);
        }
        return list;
    },
    displayImageList: function () {
        let list = EntryStatic.displayImage.list;
        return list;
    },
  
};
Entry.MODI.blockMenuBlocks = [];
//region modi 모디
Entry.MODI.getBlocks = function () {
    return {

        HW_BTN_JUDGEMENT: {
            color: EntryStatic.colorSet.block.modi.INPUT,
            outerLine: EntryStatic.colorSet.block.modi.INPUT_OUTLINE,
            fontColor: '#fff',
            skeleton: 'basic_boolean_field',
            template: '%1 버튼이 %2 ',
            params: [
                {
                    type: 'Indicator',
                    img: 'block_icon/modi_icon/button2.svg',
                    size: 11,
                },
                {
                    type: 'Dropdown',
                    options: [
                        ['클릭', 'getClick()'],
                        ['두 번 클릭', 'getDoubleClick()'],
                        ['누른 상태', 'getPressStatus()'],
                        ['스위치 켜짐', 'getToggle()'],
                    ],
                    fontSize: 11,
                    bgColor: EntryStatic.colorSet.block.modi.INPUT_OUTLINE,
                    arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                },
            ],
            def: {
                params: ['클릭', 'getClick()', 'TRUE'],
                type: 'HW_BTN_JUDGEMENT',
            },
            paramsKeyMap: {
                property: 0,
            },
            class: 'button',
            isNotFor: ['modi'],

            syntax: {
                js: [
                    {
                        syntax: 'this.button_01.%2 == TRUE',
                        template: 'button.%2',
                    },
                ],
                py:[
                    {
                        syntax: 'button.%2',
                        template: 'button.%2',
                    },
                ],
                c: [
                    {
                        syntax: '(button0.%2() == %3)',
                        template: '(button0.%2() == %3)',
                    },
                ],
            },
        },

        HW_BTN_VALUE: {
            color: EntryStatic.colorSet.block.modi.INPUT,
            outerLine: EntryStatic.colorSet.block.modi.INPUT_OUTLINE,
            fontColor: '#fff',
            skeleton: 'basic_string_field',
            template: '%1 버튼 %2',
            params: [
                {
                    type: 'Indicator',
                    img: 'block_icon/modi_icon/button2.svg',
                    size: 11,
                },
                {
                    type: 'Dropdown',
                    options: [
                        ['클릭', '2'],
                        ['두 번 클릭', '3'],
                        ['누르기', '4'],
                        ['스위치', '5'],
                    ],
                    fontSize: 11,
                    bgColor: EntryStatic.colorSet.block.modi.INPUT_OUTLINE,
                    arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                },
            ],
            def: {
                params: [null, '2'],
                type: 'HW_BTN_VALUE',
            },
            paramsKeyMap: {

                property: 0,
            },
            class: 'button',
            isNotFor: ['modi'],
            func: function (sprite, script) {
                if (!Entry.hw.sendQueue.moduleValue || !Entry.hw.sendQueue['getProperty']) {
                    Entry.MODI.initSend();
                }

                // var key = script.getStringField('name');
                var property = script.getNumberField('property');
                // var moduleID = JSON.parse(Entry.hw.portData.module['button'][key]).id;
                // var pd = JSON.parse(Entry.hw.portData.module['button'][key]);

                if (!Entry.hw.sendQueue['getProperty']) {
                    Entry.MODI.initSend();
                }

                if (!pd.value[property]) {
                    pd.value[property] = 0;

                    // send GETPROPERTY
                    /*if(Entry.MODI.getModule.id != moduleID || Entry.MODI.getModule.property != property || Object.keys(Entry.hw.sendQueue["getProperty"]).length == 0){
                Entry.hw.sendQueue["getProperty"][moduleID] = JSON.stringify({module: property, id: moduleID});
                Entry.MODI.getModule.id = moduleID;
                Entry.MODI.getModule.property = property;
            }*/
                    return 0;
                }

                return pd.value[property];
            },

            syntax: {
                js: [
                    {
                        syntax: 'this.button_01.%2',
                        template: 'button.%2',
                    },
                ],
                py:[
                    {
                        syntax: 'button.%2',
                        template: 'button.%2',
                    },
                ],
                c: [
                    {
                        syntax: 'button.%2',
                        template: 'button.%2',
                    },
                ],
            },
        },

        HW_DIAL_JUDGEMENT: {
            color: EntryStatic.colorSet.block.modi.INPUT,
            outerLine: EntryStatic.colorSet.block.modi.INPUT_OUTLINE,
            fontColor: '#fff',
            skeleton: 'basic_boolean_field',
            template: '%1 다이얼의 위치 %2 %3%',
            params: [
                {
                    type: 'Indicator',
                    img: 'block_icon/modi_icon/dial2.svg',
                    size: 11,
                },
                {
                    type: 'Dropdown',
                    options: [
                        ['>', '>'],
                        ['<', '<'],
                        ['≥', '>='],
                        ['≤', '<='],
                        ['=', '=='],
                        ['≠', '!='],
                       
                    ],
                    value: '>',
                    fontSize: 11,
                    bgColor: EntryStatic.colorSet.block.modi.INPUT_OUTLINE,
                    arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                },
                {
                    type: 'Block',
                    accept: 'string',
                },
            ],
            def: {
                params: [
                    {
                        type: 'text',
                        params: ['0'],
                    },
                    '>',
                    {
                        type: 'text',
                        params: ['0'],
                    },
                ],
                type: 'HW_DIAL_JUDGEMENT',
            },
            paramsKeyMap: {
                property: 0,
            },
            class: 'dial',
            isNotFor: ['modi'],

            syntax: {
                js: [
                    {
                        syntax: '(this.dial_01.getTurn() %2 %3)',
                        template: 'this.dial_01.getTurn() %2 %3 == true',
                    }
                ],
                py: [
                    {
                        syntax: '(dial.turn %2 %3)',
                        template: 'dial.turn %2 %3',
                    }
                ],
                c: [
                    {
                        syntax: '(button0.%2() == %3)',
                        template: '(button0.%2() == %3)',
                    },
                ],
            },
        },

        HW_DIAL_MARK_JUDGEMENT: {
            color: EntryStatic.colorSet.block.modi.INPUT,
            outerLine: EntryStatic.colorSet.block.modi.INPUT_OUTLINE,
            fontColor: '#fff',
            skeleton: 'basic_boolean_field',
            template: '%1 다이얼의 칸 %2 %3',
            params: [
                {
                    type: 'Indicator',
                    img: 'block_icon/modi_icon/dial2.svg',
                    size: 11,
                },
                {
                    type: 'Dropdown',
                    options: [
                        ['>', '>'],
                        ['<', '<'],
                        ['≥', '>='],
                        ['≤', '<='],
                        ['=', '=='],
                        ['≠', '!='],
                       
                    ],
                    value: '>',
                    fontSize: 11,
                    bgColor: EntryStatic.colorSet.block.modi.INPUT_OUTLINE,
                    arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                },

                {
                    type: 'Dropdown',
                    options: [
                        ['원점', '0'],
                        ['첫 번째 칸', '10'],
                        ['두 번째 칸', '20'],
                        ['세 번째 칸', '30'],
                        ['네 번째 칸', '40'],
                        ['다섯 번째 칸', '50'],
                        ['여섯 번째 칸', '60'],
                        ['일곱 번째 칸', '70'],
                        ['여덟 번째 칸', '80'],
                        ['아홉 번째 칸', '90'],
                        ['열 번째 칸', '100'],
                       
                    ],
                    value: '0',
                    fontSize: 11,
                    bgColor: EntryStatic.colorSet.block.modi.INPUT_OUTLINE,
                    arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                },
            ],
            def: {
                def: {
                    params: ['원점', '0', 'TRUE'],
                    type: 'HW_DIAL_MARK_JUDGEMENT',
                },
                type: 'HW_DIAL_MARK_JUDGEMENT',
            },
            paramsKeyMap: {
                property: 0,
            },
            class: 'dial',
            isNotFor: ['modi'],

            syntax: {
                js: [
                    {
                        syntax: '(this.dial_01.getTurn() %2 %3)',
                        template: 'this.dial_01.turn %2 %3 == true',
                    }
                ],
                py: [
                    {
                        syntax: '(dial.turn %2 %3)',
                        template: 'dial.turn %2 %3',
                    }
                ],
                c: [
                    {
                        syntax: '(button0.%2() == %3)',
                        template: '(button0.%2() == %3)',
                    },
                ],
            },
        },

        HW_DIAL_VALUE: {
            color: EntryStatic.colorSet.block.modi.INPUT,
            outerLine: EntryStatic.colorSet.block.modi.INPUT_OUTLINE,
            fontColor: '#fff',
            skeleton: 'basic_string_field',
            template: '%1 다이얼의 %2 ',
            params: [
                {
                    type: 'Indicator',
                    img: 'block_icon/modi_icon/dial2.svg',
                    size: 11,
                },
                {
                    type: 'Dropdown',
                    options: [
                        ['위치(%)', 2],
                        ['칸', 3]
                    ],
                    fontSize: 11,
                    bgColor: EntryStatic.colorSet.block.modi.INPUT_OUTLINE,
                    arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                },
            ],
            def: {
                params: [null, 2],
                type: 'HW_DIAL_VALUE',
            },
            paramsKeyMap: {
                name: 0,
                property: 1,
            },
            class: 'dial',
            isNotFor: ['modi'],
            func: function (sprite, script) {
                var key = script.getStringField('name');

                var pd = JSON.parse(Entry.hw.portData.module['dial'][key]);
                var moduleID = pd.id;

                if (!Entry.hw.sendQueue['getProperty']) {
                    Entry.MODI.initSend();
                }

                if (!pd.value[2]) {
                    pd.value[2] = 0;

                    // send GETPROPERTY
                    /*if(Entry.MODI.getModule.id != moduleID || Object.keys(Entry.hw.sendQueue["getProperty"]).length == 0){
                Entry.hw.sendQueue["getProperty"][moduleID] = JSON.stringify({module: 2, id: moduleID});
                Entry.MODI.getModule.id = moduleID;
            }*/
                }

                var moduleID = JSON.parse(Entry.hw.portData.module['dial'][key]).id;
                var pd = JSON.parse(Entry.hw.portData.module['button'][key]);

                return pd.value[2];
            },

            syntax: {
                 js: [
                    {
                        syntax: '(%2)',
                        template: 'this.dial_01.turn %2 %3 == TRUE',
                    }
                ],
                py: [
                    {
                        syntax: '(%2)',
                        template: '(%2)',
                    },
                ],

                c: [
                    {
                        syntax: 'dial0.%2',
                        template: 'dial0.%2',
                    },
                ],
            },
        },
        HW_TOF_JUDGEMENT: {
            color: EntryStatic.colorSet.block.modi.INPUT,
            outerLine: EntryStatic.colorSet.block.modi.INPUT_OUTLINE,
            fontColor: '#fff',
            skeleton: 'basic_boolean_field',
            template: '%1 거리의 거리 %2 %3cm',
            params: [
                {
                    type: 'Indicator',
                    img: 'block_icon/modi_icon/tof.svg',
                    size: 11,
                },
                {
                    type: 'Dropdown',
                    options: [
                        ['>', '>'],
                        ['<', '<'],
                        ['≥', '>='],
                        ['≤', '<='],
                        ['=', '=='],
                        ['≠', '!='],
                       
                    ],
                    value: '>',
                    fontSize: 11,
                    bgColor: EntryStatic.colorSet.block.modi.INPUT_OUTLINE,
                    arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                },
                {
                    type: 'Block',
                    accept: 'string',
                },
            ],
            def: {
                params: [
                    {
                        type: 'text',
                        params: ['0'],
                    },
                    '>',
                    {
                        type: 'text',
                        params: ['0'],
                    },
                ],
                type: 'HW_TOF_JUDGEMENT',
            },
            paramsKeyMap: {
                property: 0,
            },
            class: 'DISTANCE',
            isNotFor: ['modi'],

            syntax: {
                js: [
                    {
                        syntax: '(this.tof_01.getDistance() %2 %3)',
                        template: 'this.tof_01.getDistance() %2 %3 == true',
                    }
                ],
                py: [
                    {
                        syntax: '(Tof.distance %2 %3)',
                        template: 'Tof.distance %2 %3',
                    }
                ],
                c: [
                    {
                        syntax: '(button0.%2() == %3)',
                        template: '(button0.%2() == %3)',
                    },
                ],
            },
        },
        HW_TOF_VALUE: {
            color: EntryStatic.colorSet.block.modi.INPUT,
            outerLine: EntryStatic.colorSet.block.modi.INPUT_OUTLINE,
            fontColor: '#fff',
            skeleton: 'basic_string_field',
            template: '%1 거리의 거리(cm) ',
            params: [
                {
                    type: 'Indicator',
                    img: 'block_icon/modi_icon/tof.svg',
                    size: 11,
                },
               
            ],
            def: {
                params: [null, 2],
                type: 'HW_TOF_VALUE',
            },
            paramsKeyMap: {
                property: 0,
            },
            class: 'DISTANCE',
            isNotFor: ['modi'],

            syntax: {
                js: [
                    {
                        syntax: 'this.tof_01.getDistance()',
                        template: 'this.tof_01.getDistance() %2 %3 == true',
                    }
                ],
                py: [
                    {
                        syntax: 'Tof.distance',
                        template: 'Tof.distance',
                    }
                ],
                c: [
                    {
                        syntax: '(button0.%2() == %3)',
                        template: '(button0.%2() == %3)',
                    },
                ],
            },
        },
       
        HW_BTN_MENU: {
            color: EntryStatic.colorSet.block.modi.INPUT,
            outerLine: EntryStatic.colorSet.block.modi.INPUT_OUTLINE,
            fontColor: '#fff',
            skeleton: 'basic_string_field',
            template: ' %1 %2',
            params: [
                {
                    type: 'Indicator',
                    img: 'block_icon/modi_icon/button2.svg',
                    size: 11,
                },
                {
                    type: 'Dropdown',
                    options: [
                        ['눌림', 'TRUE'],
                        ['안 눌림', 'FALSE'],
                    ],
                    fontSize: 11,
                    bgColor: EntryStatic.colorSet.block.modi.INPUT_OUTLINE,
                    arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                },
            ],
            def: {
                params: [null, 'TRUE'],
                type: 'HW_BTN_MENU',
            },
            class: 'button',
            isNotFor: ['modi'],
            syntax: {
                js: [],
                py: [],
                c: [
                    {
                        syntax: '%2',
                        template: '%2',
                    },
                ],
            },
        },
        modi_button_true: {
            color: EntryStatic.colorSet.block.default.HARDWARE,
            outerLine: EntryStatic.colorSet.block.darken.HARDWARE,
            fontColor: '#fff',
            skeleton: 'basic_string_field',
            template: '눌림',
            def: {
                params: [null],
                type: 'modi_button_true',
            },
            class: 'button',
            isNotFor: ['modi'],
            func: function (sprite, script) {
                return 100;
            },

            syntax: {
                js: [],
                py: [],
                c: [
                    {
                        syntax: 'TRUE',
                        template: 'TRUE',
                    },
                ],
            },
        },
        modi_button_false: {
            color: EntryStatic.colorSet.block.default.HARDWARE,
            outerLine: EntryStatic.colorSet.block.darken.HARDWARE,
            fontColor: '#fff',
            skeleton: 'basic_string_field',
            template: '안 눌림',
            def: {
                params: [null],
                type: 'modi_button_false',
            },
            class: 'button',
            isNotFor: ['modi'],
            func: function (sprite, script) {
                return 0;
            },

            syntax: {
                js: [],
                py: [],
                c: [
                    {
                        syntax: 'FALSE',
                        template: 'FALSE',
                    },
                ],
            },
        },

        HW_LED_OFF: {
            color: EntryStatic.colorSet.block.modi.OUTPUT,
            outerLine: EntryStatic.colorSet.block.modi.OUTPUT_OUTLINE,
            skeleton: 'basic',
            template: '%2 불빛 끄기    ',
            params: [
                {
                    type: 'DropdownDynamic',
                    value: null,
                    fontSize: 11,
                    menuName: Entry.MODI.ledList,
                    bgColor: EntryStatic.colorSet.block.modi.OUTPUT_OUTLINE,
                    arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                },
                {
                    type: 'Indicator',
                    img: 'block_icon/modi_icon/led.svg',
                    size: 11,
                },
            ],
            def: {
                params: [null],
                type: 'HW_LED_OFF',
            },
            paramsKeyMap: {
                name: 0,
            },
            class: 'led',
            isNotFor: ['modi'],
            func: function (sprite, script) {
                if (!Entry.hw.sendQueue.moduleValue) {
                    Entry.MODI.initSend();
                }

                var key = script.getStringField('name');
                var moduleID = JSON.parse(Entry.hw.portData.module['led'][key]).id;

                var sq = Entry.hw.sendQueue.moduleValue;
                sq['led'][key] = JSON.stringify({
                    module: 'LED_RGB',
                    id: moduleID,
                    value1: 0,
                    value2: 0,
                    value3: 0,
                });

                return script.callReturn();
            },

            syntax: {
                js: [
                    {
                        syntax: 'this.led_01.setRgb(0,0,0);',
                        template: 'led.set_rgb(0,0,0);',
                    },
                ],
                py: [
                    {
                        syntax: 'led.set_rgb(0,0,0);',
                        template: 'led.set_rgb(0,0,0);',
                    },
                ],
            },
        },
        HW_LED_CUSTOM: {
            color: EntryStatic.colorSet.block.modi.OUTPUT,
            outerLine: EntryStatic.colorSet.block.modi.OUTPUT_OUTLINE,
            skeleton: 'basic',
            template: '%1 불빛의 빨간빛을 %2% 초록빛을 %3% 파란빛을 %4%로 정하기   ',
            params: [
                {
                    type: 'Indicator',
                    img: 'block_icon/modi_icon/led.svg',
                    size: 11,
                },
                {
                    type: 'Block',
                    accept: 'string',
                },
                {
                    type: 'Block',
                    accept: 'string',
                },
                {
                    type: 'Block',
                    accept: 'string',
                },
               
            ],
            def: {
                params: [
                    null,
                    {
                        type: 'number',
                        params: ['100'],
                    },
                    {
                        type: 'number',
                        params: ['100'],
                    },
                    {
                        type: 'number',
                        params: ['100'],
                    },
                ],
                type: 'HW_LED_CUSTOM',
            },
            paramsKeyMap: {
                name: 0,
                rValue: 1,
                gValue: 2,
                bValue: 3,
            },
            class: 'led',
            isNotFor: ['modi'],
            func: function (sprite, script) {
                if (!Entry.hw.sendQueue.moduleValue) {
                    Entry.MODI.initSend();
                }
                var key = script.getStringField('name');
                var red = script.getNumberValue('rValue');
                var green = script.getNumberValue('gValue');
                var blue = script.getNumberValue('bValue');

                var moduleID = JSON.parse(Entry.hw.portData.module['led'][key]).id;

                var sq = Entry.hw.sendQueue.moduleValue;
                sq['led'][key] = JSON.stringify({
                    module: 'LED_RGB',
                    id: moduleID,
                    value1: red,
                    value2: green,
                    value3: blue,
                });

                return script.callReturn();
            },

            syntax: {
                js: [
                    {
                        syntax: 'this.led_01.setRgb(%2,%3,%4);',
                        template: 'led.set_rgb(0,0,0);',
                    },
                ],
                py: [
                    {
                        syntax: 'led.set_rgb(%2,%3,%4);',
                        template: 'led.set_rgb(%2,%3,%4);',
                    },
                ],
            },
        },
        HW_LED_BASIC: {
            color: EntryStatic.colorSet.block.modi.OUTPUT,
            outerLine: EntryStatic.colorSet.block.modi.OUTPUT_OUTLINE,
            skeleton: 'basic',
            template: '%2 불빛을 %1 빛으로 정하기    ',
            params: [
                // {
                //     type: 'DropdownDynamic',
                //     value: null,
                //     fontSize: 11,
                //     menuName: Entry.MODI.ledList,
                //     bgColor: EntryStatic.colorSet.block.darken.HARDWARE,
                //     arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                // },
                {
                    type: 'Color',
                },
                {
                    type: 'Indicator',
                    img: 'block_icon/modi_icon/led.svg',
                    size: 11,
                },
            ],
            def: {
                params: [null],
                type: 'HW_LED_BASIC',
            },
            paramsKeyMap: {
                // name: 0,
                color: 0,
            },
            class: 'led',
            isNotFor: ['modi'],
            func: function (sprite, script) {
                if (!Entry.hw.sendQueue.moduleValue) {
                    Entry.MODI.initSend();
                }
                var key = script.getStringField('name');
                var color = script.getStringField('color');

                color = color.substring(1, 7);
                var bigint = parseInt(color, 16);
                var red = Math.round(((bigint >> 16) & 255) / 255 * 100);
                var green = Math.round(((bigint >> 8) & 255) / 255 * 100);
                var blue = Math.round((bigint & 255) / 255 * 100);
                var moduleID = JSON.parse(Entry.hw.portData.module['led'][key]).id;

                var sq = Entry.hw.sendQueue.moduleValue;
                sq['led'][key] = JSON.stringify({
                    module: 'LED_RGB',
                    id: moduleID,
                    value1: red,
                    value2: green,
                    value3: blue,
                });

                return script.callReturn();
            },

            syntax: {
                js: [
                    {
                        syntax: 'this.led_01.%1;',
                        template: 'led.set_rgb(0,0,0);',
                    },
                ],
                py: [
                    {
                        syntax: 'led.%1',
                        template: 'led.%1',
                    },
                ],
            },
        },
        HW_SPEAKER_OFF: {
            color: EntryStatic.colorSet.block.modi.OUTPUT,
            outerLine: EntryStatic.colorSet.block.modi.OUTPUT_OUTLINE,
            skeleton: 'basic',
            template: '%2 스피커 끄기    ',
            params: [
                {
                    type: 'DropdownDynamic',
                    value: null,
                    fontSize: 11,
                    menuName: Entry.MODI.speakerList,
                    bgColor: EntryStatic.colorSet.block.modi.OUTPUT_OUTLINE,
                    arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                },
                {
                    type: 'Indicator',
                    img: 'block_icon/modi_icon/speaker.svg',
                    size: 11,
                },
            ],
            events: {},
            def: {
                params: [
                    null,
                ],
                type: 'HW_SPEAKER_OFF',
            },
            paramsKeyMap: {
                name: 0,
                frequence: 1,
                volume: 2,
            },
            class: 'speaker',
            isNotFor: ['modi'],
            func: function (sprite, script) {
                if (!Entry.hw.sendQueue.moduleValue) {
                    Entry.MODI.initSend();
                }
                var key = script.getStringField('name'),
                    frequence = script.getStringField('frequence'),
                    volume = script.getNumberValue('volume', script);
                var moduleID = JSON.parse(Entry.hw.portData.module['speaker'][key]).id;

                var sq = Entry.hw.sendQueue.moduleValue;
                sq['speaker'][key] = JSON.stringify({
                    module: 'SPEAKER_BUZZER',
                    id: moduleID,
                    value1: frequence,
                    value2: volume,
                });

                return script.callReturn();
            },

            syntax: {

                js: [
                    {
                        syntax: 'this.speaker_01.setTune(0, 0);',
                        template: 'this.speaker_01.setTune(0, 0);',
                    },
                ],
                py:[
                    {
                        syntax: 'speaker.reset()',
                        template: 'speaker.reset()',
                    }
                ],
                c: [
                    {
                        syntax: 'speaker0.setTune(0,0);',
                        template: 'speaker0.setTune(0,0);',
                    },
                ],
            },
        },
        HW_SPEAKER_TUNE: {
            color: EntryStatic.colorSet.block.modi.OUTPUT,
            outerLine: EntryStatic.colorSet.block.modi.OUTPUT_OUTLINE,
            skeleton: 'basic',
            template: '%1 스피커의 음%2을(를) 크기%3%로 정하기   ',
            params: [
                {
                    type: 'Indicator',
                    img: 'block_icon/modi_icon/speaker.svg',
                    size: 11,
                },
                {
                    type: 'Dropdown',
                    options: [
                        // [Lang.Blocks.modi_speaker_F_PA_5, 'F_PA_5'],
                        // [Lang.Blocks.modi_speaker_F_SOL_5, 'F_SOL_5'],
                        // [Lang.Blocks.modi_speaker_F_RA_5, 'F_RA_5'],
                        // [Lang.Blocks.modi_speaker_F_SO_5, 'F_SO_5'],
                        // [Lang.Blocks.modi_speaker_F_PA_S_5, 'F_PA_S_5'],
                        // [Lang.Blocks.modi_speaker_F_SOL_S_5, 'F_SOL_S_5'],
                        // [Lang.Blocks.modi_speaker_F_RA_S_5, 'F_RA_S_5'],
                        [Lang.Blocks.modi_speaker_F_DO_6, 'F_DO_6'],
                        [Lang.Blocks.modi_speaker_F_RE_6, 'F_RE_6'],
                        [Lang.Blocks.modi_speaker_F_MI_6, 'F_MI_6'],
                        [Lang.Blocks.modi_speaker_F_PA_6, 'F_PA_6'],
                        [Lang.Blocks.modi_speaker_F_SOL_6, 'F_SOL_6'],
                        [Lang.Blocks.modi_speaker_F_RA_6, 'F_RA_6'],
                        [Lang.Blocks.modi_speaker_F_SI_6, 'F_SI_6'],
                        // [Lang.Blocks.modi_speaker_F_DO_S_6, 'F_DO_S_6'],
                        // [Lang.Blocks.modi_speaker_F_RE_S_6, 'F_RE_S_6'],
                        // [Lang.Blocks.modi_speaker_F_PA_S_6, 'F_PA_S_6'],
                        // [Lang.Blocks.modi_speaker_F_SOL_S_6, 'F_SOL_S_6'],
                        // [Lang.Blocks.modi_speaker_F_RA_S_6, 'F_RA_S_6'],
                        [Lang.Blocks.modi_speaker_F_DO_7, 'F_DO_7'],
                        // [Lang.Blocks.modi_speaker_F_RE_7, 'F_RE_7'],
                        // [Lang.Blocks.modi_speaker_F_MI_7, 'F_MI_7'],
                        // [Lang.Blocks.modi_speaker_F_DO_S_7, 'F_DO_S_7'],
                        // [Lang.Blocks.modi_speaker_F_RE_S_7, 'F_RE_S_7'],
                    ],
                    fontSize: 11,
                    bgColor: EntryStatic.colorSet.block.modi.OUTPUT_OUTLINE,
                    arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                },
                {
                    type: 'Block',
                    accept: 'string',
                    defaultType: 'number',
                },
              
            ],
            events: {},
            def: {
                params: [
                    null,
                    'F_DO_6',
                    {
                        type: 'number',
                        params: ['100'],
                    },
                ],
                type: 'HW_SPEAKER_TUNE',
            },
            paramsKeyMap: {
                name: 0,
                frequence: 1,
                volume: 2,
            },
            class: 'speaker',
            isNotFor: ['modi'],
            func: function (sprite, script) {
                if (!Entry.hw.sendQueue.moduleValue) {
                    Entry.MODI.initSend();
                }
                var key = script.getStringField('name'),
                    frequence = script.getStringField('frequence'),
                    volume = script.getNumberValue('volume', script);
                var moduleID = JSON.parse(Entry.hw.portData.module['speaker'][key]).id;

                var sq = Entry.hw.sendQueue.moduleValue;
                sq['speaker'][key] = JSON.stringify({
                    module: 'SPEAKER_BUZZER',
                    id: moduleID,
                    value1: frequence,
                    value2: volume,
                });

                return script.callReturn();
            },

            syntax: {
                js: [
                    {
                        syntax: 'this.speaker_01.setTune(%2, %3);',
                        template: 'this.speaker_01.setTune(0, 0);',
                    },
                ],
                py:[
                    {
                        syntax: 'speaker.tune = "%2", %3',
                        template: 'speaker.tune = %2, %3',
                    }
                ],
                c: [
                    {
                        syntax: 'speaker0.?%2?%3',
                        template: 'speaker0.?%2?%3',
                    },
                ],
            },
        },
        HW_SPEAKER_MELODY: {
            // melodyBlock: ['송어', '은파'],
            color: EntryStatic.colorSet.block.modi.OUTPUT,
            outerLine: EntryStatic.colorSet.block.modi.OUTPUT_OUTLINE,
            skeleton: 'basic',
            template: '%1 스피커의 멜로디%2을(를) 크기%3%로 재생하기',
            params: [
                {
                    type: 'Indicator',
                    img: 'block_icon/modi_icon/speaker.svg',
                    size: 11,
                },
                {
                    type: 'Dropdown',
                    options: [
                        ["들리브  '실비아:피치카토'", 'res/Delibes.mid'],
                        ["런던 다리가 무너지네", 'res/London.mid'],
                        ["맥도널드 노인", 'res/OldMac.mid'],
                        ["모차르트 '피아노협주곡 21번 2악장'", 'res/Mozart21.mid'],
                        ["베르디 '여자의 마음'", 'res/Verdi.mid'],
                        ["비발디 '사계:봄'", "res/Vivaldi.mid"],
                        ["비제 '카르맨:투우사'", "res/Bizet.mid"],
                        ["수자 '워싱턴 포스트 행진곡'", "res/Sousa.mid"],
                        ["슈베르트 '송어'", "res/SchubeD.mid"],
                        ["요나손 '뻐꾹 왈츠'","res/Jonasson.mid"],
                        ["푸치크 '검투사의 입장'", "res/Fucik.mid"],
                        ["Mary had a Little Lamb(떳다 떳다 비행기)", "res/Mary.mid"],
                        ["드보르작 '교향곡 제 9번'", "res/Dvorak.mid"],
                        ["로시니 '윌리암 텔 서곡'", "res/Rossini.mid"],
                        ["모차르트 '교향곡 제 40번'", "res/Mozart40.mid"],
                        ["모차르트 '밤의여왕'", "res/MozartQ.mid"],
                        ["오펜바흐 '지옥의 오르페우스'", "res/BachO.mid"],
                        ["그리그 '피아노 협주곡'","res/Grieg.mid"],
                        ["바흐 '토카다와 푸가 D단조'","res/BachD.mid"],
                        ["베토벤 '교향곡 제 5번'","res/Beeth5.mid"],
                        ["베토벤 '엘리제를 위하여'","res/BeethF.mid"],
                        ["슈트라우스 '아름다운 도나우강'","res/Straus.mid"],
                        ["차이콥스키 '피아노 협주곡 1번'","res/Tchaiko1.mid"],
                        ["네케 '크시코스의 우편마차'","res/Necke.mid"],
                        ["모차르트 '터키 행진곡'", "res/MozartR.mid"],
                        ["브람스 '헝가리 무곡 5번'","res/Brahms5.mid"],
                        ["차이콥스키 '사탕요정의 춤'","res/TchaikoD.mid"],
                        ["거미가 줄을 타고 올라갑니다","res/Spider.mid"],
                        ["델의 농부","res/Farmer.mid"],
                        ["리스트 '사랑의 꿈 3번'","res/Liszt.mid"],
                        ["모차르트 '피아노 소나타 16번'", "res/Mozart16.mid"],
                        ["바흐 '미뉴에트 G장조'", "res/BachG.mid"],
                        ["반짝반짝 작은 별", "res/twinkle.mid"],
                        ["베토벤 '미뉴에트 G장조'", "res/BeethG.mid"],
                        ["보케리니 '미뉴에트'", "res/Bocc.mid"],
                        ["브람스 '왈츠'", "res/Brahms16.mid"],
                        ["브람스 '자장가'", "res/BrahmsL.mid"],
                        ["슈베르트 '자장가'", "res/SchubeW.mid"],
                        ["양키 두들", "res/yankee.mid"],
                        ["엘가 '사랑의 인사'", "res/ElgarS.mid"],
                        ["와이먼 '은파'", "res/Wyman.mid"],
                        ["차이콥스키 '꽃의 왈츠'", "res/TchaikoW.mid"],
                        ["차이콥스키 '백조의 호수:정경'", "res/TchaikoS.mid"],
                        ["멘델스존 '결혼 행진곡'", "res/Mendel.mid"],
                        ["바그너 '결혼 행진곡'", "res/Wagner.mid"],
                        ["엘가 '위풍당당 행진곡'", "res/ElgarP.mid"],
                        ["생일축하 합니다", "res/Birthday.mid"],
                        ["징글벨", "res/Jingle.mid"],
                        ["메리크리스마스", "res/Merry.mid"],
                        ["감정음 1 (신남)", "res/Emotion1.mid"],
                        ["감정음 2 (우울)", "res/Emotion2.mid"],
                        ["감정음 3 (기쁨)", "res/Emotion3.mid"],
                        ["경고음 1", "res/Warning1.mid"],
                        ["경고음 2", "res/Warning2.mid"],
                        ["시작음 1", "res/Start1.mid"],
                        ["시작음 2", "res/Start2.mid"],
                        ["완료음 1", "res/Complet1.mid"],
                        ["완료음 2", "res/Complet2.mid"],
                        ["알림음 1", "res/Bell1.mid"],
                        ["시작", "res/Start.wav"],
                        ["완료", "res/Complete.wav"],
                        ["승리", "res/Win.wav"],
                        ["카메라", "res/Camera.wav"],
                        ["폭탄", "res/Bomb.wav"],                
                        ["자동차", "res/Car.wav"],
                        ["사이렌", "res/Siren.wav"],
                        ["알람", "res/Alarm.wav"],
                        ["신나는", "res/Exciting.wav"],
                        ["통통 튀는", "res/bouncing.wav"],
                        ["로봇", "res/Robot.wav"],
                        ["성공", "res/Success.wav"],
                    ],
                    fontSize: 11,
                    bgColor: EntryStatic.colorSet.block.modi.OUTPUT_OUTLINE,
                    arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                },
                {
                    type: 'Block',
                    accept: 'string',
                    defaultType: 'number',
                },
               
            ],
            events: {},
            def: {
                params: [
                    "들리브  '실비아:피치카토'",
                   'res/Delibes.mid',
                   {
                    type: 'number',
                    params: ['100'],
                }
                ],
                type: 'HW_SPEAKER_MELODY',
            },
            paramsKeyMap: {
                name: 0,
                text: 1,
            },
            class: 'speaker',
            isNotFor: ['modi'],
            func: function (sprite, script) {
                if (!Entry.hw.sendQueue.moduleValue) {
                    Entry.MODI.initSend();
                }
                var key = script.getStringField('name'),
                    frequence = script.getStringField('frequence'),
                    volume = script.getNumberValue('volume', script);
                var moduleID = JSON.parse(Entry.hw.portData.module['speaker'][key]).id;

                var sq = Entry.hw.sendQueue.moduleValue;
                sq['speaker'][key] = JSON.stringify({
                    module: 'SPEAKER_BUZZER',
                    id: moduleID,
                    value1: frequence,
                    value2: volume,
                });

                return script.callReturn();
            },
            syntax: {
                js: [
                    {
                        syntax: 'this.speaker_01?%2?%3',
                        template: 'this.speaker_01.playMusic(SPEAKER_START,"%2",%3);',
                    },
                ],
                py:[
                    {
                        syntax: 'speaker.play_music = "%2", %3',
                        template: 'speaker.play_music = %2, %3',
                    }
                ],
                c: [
                    {
                        syntax: 'speacker0.?%1?%3',
                        template: 'speacker0.?%1?%3',
                    },
                ],
            },

        },

        HW_MOTOR_A: {
            color: EntryStatic.colorSet.block.modi.OUTPUT,
            outerLine: EntryStatic.colorSet.block.modi.OUTPUT_OUTLINE,
            fontColor: '#fff',
            skeleton: 'basic',
            template: '%1 모터 A의 속도를 %2%로 정하기',
            params: [  
                {
                    type: 'Indicator',
                    img: 'block_icon/modi_icon/motor_l.svg',
                    size: 11,
                },
                {
                    type: 'Block',
                    accept: 'string',
                    defaultType: 'number'
                },
              
            ],
            def: {
                params: [ 
                    null,
                    {
                        type: 'number',
                        params: ['100'],
                    },
                ],
                type: 'HW_MOTOR_A',
            },
            paramsKeyMap: {
                name: 0,
                property: 1,
                upper: 2,
                bottom: 3,
            },
            class: 'motor_a',
            isNotFor: ['modi'],
            func: function (sprite, script) {
                if (!Entry.hw.sendQueue.moduleValue) {
                    Entry.MODI.initSend();
                }
                var key = script.getStringField('name'),
                    property = script.getStringField('property'),
                    upper = script.getNumberValue('upper'),
                    bottom = script.getNumberValue('bottom');
                var moduleID = JSON.parse(Entry.hw.portData.module['motor_a'][key]).id;

                var sq = Entry.hw.sendQueue.moduleValue;
                sq['motor_a'][key] = JSON.stringify({
                    module: property,
                    id: moduleID,
                    value1: upper,
                    value2: bottom,
                });

                return script.callReturn();
            },

            syntax: {
                js: [
                    {
                        syntax: 'this.motora_01.setSpeed(%2);',
                        template: 'this.speaker_01.setTune(0, 0);',
                    },
                ],
                py: [
                    {
                        syntax: '(motorA.speed = %2)',
                        template: '(motorA.speed = %2)',
                    },
                ],

                c: [
                    {
                        syntax: 'motor0.?%2?%3?%4',
                        template: 'motor0.?%2?%3?%4',
                    },
                ],
            },
        },

        HW_MOTOR_A_ANGLE: {
            color: EntryStatic.colorSet.block.modi.OUTPUT,
            outerLine: EntryStatic.colorSet.block.modi.OUTPUT_OUTLINE,
            fontColor: '#fff',
            skeleton: 'basic',
            template: '%1 모터 A의 각도를 %2°로 정하기',
            params: [  
                {
                    type: 'Indicator',
                    img: 'block_icon/modi_icon/motor_l.svg',
                    size: 11,
                },
                {
                    type: 'Block',
                    accept: 'string',
                    defaultType: 'number'
                },
              
            ],
            def: {
                params: [ 
                    null,
                    {
                        type: 'number',
                        params: ['0'],
                    },
                ],
                type: 'HW_MOTOR_A_ANGLE',
            },
            paramsKeyMap: {
                name: 0,
                property: 1,
                upper: 2,
                bottom: 3,
            },
            class: 'motor_a',
            isNotFor: ['modi'],
            func: function (sprite, script) {
                if (!Entry.hw.sendQueue.moduleValue) {
                    Entry.MODI.initSend();
                }
                var key = script.getStringField('name'),
                    property = script.getStringField('property'),
                    upper = script.getNumberValue('upper'),
                    bottom = script.getNumberValue('bottom');
                var moduleID = JSON.parse(Entry.hw.portData.module['motor_a'][key]).id;

                var sq = Entry.hw.sendQueue.moduleValue;
                sq['motor_a'][key] = JSON.stringify({
                    module: property,
                    id: moduleID,
                    value1: upper,
                    value2: bottom,
                });

                return script.callReturn();
            },

            syntax: {
                js: [
                    {
                        syntax: 'this.motora_01.setAngle(%2,70,1);',
                        template: 'this.speaker_01.setTune(0, 0);',
                    },
                ],
                py: [
                    {
                        syntax: '(motorA.angle = %2)',
                        template: '(motorA.angle = %2)',
                    },
                ],

                c: [
                    {
                        syntax: 'motor0.?%2?%3?%4',
                        template: 'motor0.?%2?%3?%4',
                    },
                ],
            },
        },

        HW_MOTOR_A_ANGLE_CHANGE: {
            color: EntryStatic.colorSet.block.modi.OUTPUT,
            outerLine: EntryStatic.colorSet.block.modi.OUTPUT_OUTLINE,
            fontColor: '#fff',
            skeleton: 'basic',
            template: '%1 모터 A의 각도를 %2 방향으로 %3°만큼 바꾸기',
            params: [  
                {
                    type: 'Indicator',
                    img: 'block_icon/modi_icon/motor_l.svg',
                    size: 11,
                },
                {
                    type: 'Dropdown',
                    options: [
                        ['시계', 2],
                        ['반시계', 3]
                    ],
                    fontSize: 11,
                    bgColor: EntryStatic.colorSet.block.modi.OUTPUT_OUTLINE,
                    arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                },
                {
                    type: 'Block',
                    accept: 'string',
                    defaultType: 'number'
                },
              
            ],
            def: {
                params: [
                    null, 
                    2,
                    {
                        type: 'number',
                        params: ['0'],
                    },
                ],
                type: 'HW_MOTOR_A_ANGLE_CHANGE',
            },
            paramsKeyMap: {
                name: 0,
                property: 1,
                upper: 2,
                bottom: 3,
            },
            class: 'motor_a',
            isNotFor: ['modi'],
            func: function (sprite, script) {
                if (!Entry.hw.sendQueue.moduleValue) {
                    Entry.MODI.initSend();
                }
                var key = script.getStringField('name'),
                    property = script.getStringField('property'),
                    upper = script.getNumberValue('upper'),
                    bottom = script.getNumberValue('bottom');
                var moduleID = JSON.parse(Entry.hw.portData.module['motor_a'][key]).id;

                var sq = Entry.hw.sendQueue.moduleValue;
                sq['motor_a'][key] = JSON.stringify({
                    module: property,
                    id: moduleID,
                    value1: upper,
                    value2: bottom,
                });

                return script.callReturn();
            },

            syntax: {
                js: [
                    {
                        syntax: '%2?%3',
                    
                    },
                ],
                py: [
                    {
                       syntax: '(motorA.append_angle = %3)',
                        template: '(motorA.append_angle = %3)',
                    },
                ],

                c: [
                    {
                        syntax: 'motor0.?%2?%3?%4',
                        template: 'motor0.?%2?%3?%4',
                    },
                ],
            },
        },
        
        HW_MOTOR_A_STOP: {
            color: EntryStatic.colorSet.block.modi.OUTPUT,
            outerLine: EntryStatic.colorSet.block.modi.OUTPUT_OUTLINE,
            fontColor: '#fff',
            skeleton: 'basic',
            template: '%1 모터 A 멈추기',
            params: [  
                {
                    type: 'Indicator',
                    img: 'block_icon/modi_icon/motor_l.svg',
                    size: 11,
                },
            
              
            ],
            def: {
            
                type: 'HW_MOTOR_A_STOP',
            },
            paramsKeyMap: {
                name: 0,
                property: 1,
                upper: 2,
                bottom: 3,
            },
            class: 'motor_a',
            isNotFor: ['modi'],
            func: function (sprite, script) {
                if (!Entry.hw.sendQueue.moduleValue) {
                    Entry.MODI.initSend();
                }
                var key = script.getStringField('name'),
                    property = script.getStringField('property'),
                    upper = script.getNumberValue('upper'),
                    bottom = script.getNumberValue('bottom');
                var moduleID = JSON.parse(Entry.hw.portData.module['motor_a'][key]).id;

                var sq = Entry.hw.sendQueue.moduleValue;
                sq['motor_a'][key] = JSON.stringify({
                    module: property,
                    id: moduleID,
                    value1: upper,
                    value2: bottom,
                });

                return script.callReturn();
            },

            syntax: {
                js: [
                    {
                        syntax: 'this.motora_01.stop();',
                        template: 'motorA.stop()',
                    },
                ], 
                py: [
                    {
                        syntax: 'motorA.stop()',
                        template: 'motorA.stop()',
                    },
                ],

                c: [
                    {
                        syntax: 'motor0.?%2?%3?%4',
                        template: 'motor0.?%2?%3?%4',
                    },
                ],
            },
        },

        HW_MOTOR_B: {
            color: EntryStatic.colorSet.block.modi.OUTPUT,
            outerLine: EntryStatic.colorSet.block.modi.OUTPUT_OUTLINE,
            fontColor: '#fff',
            skeleton: 'basic',
            template: '%1 모터 B의 속도를 %2%로 정하기',
            params: [  
                {
                    type: 'Indicator',
                    img: 'block_icon/modi_icon/motor_r.svg',
                    size: 11,
                },
                {
                    type: 'Block',
                    accept: 'string',
                    defaultType : 'number'
                },
              
            ],
            def: {
                params: [ 
                    null,
                    {
                        type: 'number',
                        params: ['100'],
                    },
                ],
                type: 'HW_MOTOR_B',
            },
            paramsKeyMap: {
                name: 0,
                property: 1,
                upper: 2,
                bottom: 3,
            },
            class: 'motor_b',
            isNotFor: ['modi'],
            func: function (sprite, script) {
                if (!Entry.hw.sendQueue.moduleValue) {
                    Entry.MODI.initSend();
                }
                var key = script.getStringField('name'),
                    property = script.getStringField('property'),
                    upper = script.getNumberValue('upper'),
                    bottom = script.getNumberValue('bottom');
                var moduleID = JSON.parse(Entry.hw.portData.module['motor_b'][key]).id;

                var sq = Entry.hw.sendQueue.moduleValue;
                sq['motor_b'][key] = JSON.stringify({
                    module: property,
                    id: moduleID,
                    value1: upper,
                    value2: bottom,
                });

                return script.callReturn();
            },

            syntax: {
                js: [
                    {
                        syntax: 'this.motorb_01.setSpeed(%2);',
                        template: 'motorA.stop()',
                    },
                ], 
                py: [
                    {
                        syntax: '(motorB.speed = %2)',
                        template: '(motorB.speed = %2)',
                    },
                ],

                c: [
                    {
                        syntax: 'motor0.?%2?%3?%4',
                        template: 'motor0.?%2?%3?%4',
                    },
                ],
            },
        },

        HW_MOTOR_B_ANGLE: {
            color: EntryStatic.colorSet.block.modi.OUTPUT,
            outerLine: EntryStatic.colorSet.block.modi.OUTPUT_OUTLINE,
            fontColor: '#fff',
            skeleton: 'basic',
            template: '%1 모터 B의 각도를 %2°로 정하기',
            params: [  
                {
                    type: 'Indicator',
                    img: 'block_icon/modi_icon/motor_r.svg',
                    size: 11,
                },
                {
                    type: 'Block',
                    accept: 'string',
                    defaultType: 'number'
                },
              
            ],
            def: {
                params: [ 
                    null,
                    {
                        type: 'number',
                        params: ['0'],
                    },
                ],
                type: 'HW_MOTOR_B_ANGLE',
            },
            paramsKeyMap: {
                name: 0,
                property: 1,
                upper: 2,
                bottom: 3,
            },
            class: 'motor_b',
            isNotFor: ['modi'],
            func: function (sprite, script) {
                if (!Entry.hw.sendQueue.moduleValue) {
                    Entry.MODI.initSend();
                }
                var key = script.getStringField('name'),
                    property = script.getStringField('property'),
                    upper = script.getNumberValue('upper'),
                    bottom = script.getNumberValue('bottom');
                var moduleID = JSON.parse(Entry.hw.portData.module['motor_b'][key]).id;

                var sq = Entry.hw.sendQueue.moduleValue;
                sq['motor_b'][key] = JSON.stringify({
                    module: property,
                    id: moduleID,
                    value1: upper,
                    value2: bottom,
                });

                return script.callReturn();
            },

            syntax: {
                js: [
                    {
                        syntax: 'this.motorb_01.setAngle(%2,70,1);',
                    
                    },
                ], 
                py: [
                    {
                        syntax: '(motorB.angle = %2)',
                        template: '(motorB.angle = %2)',
                    },
                ],

                c: [
                    {
                        syntax: 'motor0.?%2?%3?%4',
                        template: 'motor0.?%2?%3?%4',
                    },
                ],
            },
        },

        HW_MOTOR_B_ANGLE_CHANGE: {
            color: EntryStatic.colorSet.block.modi.OUTPUT,
            outerLine: EntryStatic.colorSet.block.modi.OUTPUT_OUTLINE,
            fontColor: '#fff',
            skeleton: 'basic',
            template: '%1 모터 B의 각도를 %2 방향으로 %3°만큼 바꾸기',
            params: [  
                {
                    type: 'Indicator',
                    img: 'block_icon/modi_icon/motor_r.svg',
                    size: 11,
                },
                {
                    type: 'Dropdown',
                    options: [
                        ['시계', 2],
                        ['반시계', 3]
                    ],
                    fontSize: 11,
                    bgColor: EntryStatic.colorSet.block.modi.OUTPUT_OUTLINE,
                    arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                },
                {
                    type: 'Block',
                    accept: 'string',
                    defaultType: 'number'
                },
              
            ],
            def: {
                params: [
                    null, 
                    2,
                    {
                        type: 'number',
                        params: ['0'],
                    },
                ],
                type: 'HW_MOTOR_B_ANGLE_CHANGE',
            },
            paramsKeyMap: {
                name: 0,
                property: 1,
                upper: 2,
                bottom: 3,
            },
            class: 'motor_b',
            isNotFor: ['modi'],
            func: function (sprite, script) {
                if (!Entry.hw.sendQueue.moduleValue) {
                    Entry.MODI.initSend();
                }
                var key = script.getStringField('name'),
                    property = script.getStringField('property'),
                    upper = script.getNumberValue('upper'),
                    bottom = script.getNumberValue('bottom');
                var moduleID = JSON.parse(Entry.hw.portData.module['motor_b'][key]).id;

                var sq = Entry.hw.sendQueue.moduleValue;
                sq['motor_b'][key] = JSON.stringify({
                    module: property,
                    id: moduleID,
                    value1: upper,
                    value2: bottom,
                });

                return script.callReturn();
            },

            syntax: {
                js: [
                    {
                        syntax: '%2?%3',
                    
                    },
                ],
                py: [
                    {
                       syntax: '(motorB.append_angle = %3)',
                        template: '(motorB.append_angle = %3)',
                    },
                ],

                c: [
                    {
                        syntax: 'motor0.?%2?%3?%4',
                        template: 'motor0.?%2?%3?%4',
                    },
                ],
            },
        },
        
        HW_MOTOR_B_STOP: {
            color: EntryStatic.colorSet.block.modi.OUTPUT,
            outerLine: EntryStatic.colorSet.block.modi.OUTPUT_OUTLINE,
            fontColor: '#fff',
            skeleton: 'basic',
            template: '%1 모터 B 멈추기',
            params: [  
                {
                    type: 'Indicator',
                    img: 'block_icon/modi_icon/motor_r.svg',
                    size: 11,
                },
            
              
            ],
            def: {
            
                type: 'HW_MOTOR_B_STOP',
            },
            paramsKeyMap: {
                name: 0,
                property: 1,
                upper: 2,
                bottom: 3,
            },
            class: 'motor_b',
            isNotFor: ['modi'],
            func: function (sprite, script) {
                if (!Entry.hw.sendQueue.moduleValue) {
                    Entry.MODI.initSend();
                }
                var key = script.getStringField('name'),
                    property = script.getStringField('property'),
                    upper = script.getNumberValue('upper'),
                    bottom = script.getNumberValue('bottom');
                var moduleID = JSON.parse(Entry.hw.portData.module['motor_b'][key]).id;

                var sq = Entry.hw.sendQueue.moduleValue;
                sq['motor_b'][key] = JSON.stringify({
                    module: property,
                    id: moduleID,
                    value1: upper,
                    value2: bottom,
                });

                return script.callReturn();
            },

            syntax: {
                js: [
                    {
                        syntax: 'this.motorb_01.stop();',
                        template: 'this.motorb_01.stop();',
                    },
                ], 
                py: [
                    {
                        syntax: 'motorB.stop()',
                        template: 'motorB.stop()',
                    },
                ],

                c: [
                    {
                        syntax: 'motor0.?%2?%3?%4',
                        template: 'motor0.?%2?%3?%4',
                    },
                ],
            },
        },

        HW_DISPLAY_TEXT: {
            color: EntryStatic.colorSet.block.modi.OUTPUT,
            outerLine: EntryStatic.colorSet.block.modi.OUTPUT_OUTLINE,
            skeleton: 'basic',
            template: '%3 화면에 글자 %2 보이기    ',
            params: [
                {
                    type: 'Dropdown',
                    options: [['첫째 줄', 0], ['둘째 줄', 15], ['샛째 줄', 30]],
                    value: 0,
                    fontSize: 10,
                    bgColor: EntryStatic.colorSet.block.modi.OUTPUT_OUTLINE,
                    arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                },
                {
                    type: 'Block',
                    accept: 'string',
                    defaultType: 'number',
                },
                {
                    type: 'Indicator',
                    img: 'block_icon/modi_icon/display.svg',
                    size: 11,
                },
            ],
            events: {},
            def: {
                params: [
                    null,
                    {
                        type: 'text',
                        params: ['안녕!'],
                    },
                ],
                type: 'HW_DISPLAY_TEXT',
            },
            paramsKeyMap: {
                name: 0,
                text: 1,
            },
            class: 'display',
            isNotFor: ['modi'],
            func: function (sprite, script) {
                if (!Entry.hw.sendQueue.moduleValue) {
                    Entry.MODI.initSend();
                }

                var key = script.getStringField('name'),
                    text = script.getStringValue('text');

                if (text.length > 27) {
                    return script.callReturn();
                }

                var moduleID = JSON.parse(Entry.hw.portData.module['display'][key]).id;

                var sq = Entry.hw.sendQueue.moduleValue;
                sq['display'][key] = JSON.stringify({
                    module: 'DISPLAY_TEXT',
                    id: moduleID,
                    value1: text,
                });
                return script.callReturn();
            },
            syntax: {
                js: [
                    {
                        syntax: 'this.display_01.writeText(%2);',
                        template: 'this.display_01.writeText(%2);',
                    },
                ],

                py:[
                    {
                        syntax: 'display.text = %2',
                        template: 'display.text = %2',
                    }
                ],
                c: [
                    {
                        syntax: 'display0.(?lXrObo8m_1#?)%1(?lXrObo8m_1#?)%2',
                        template: 'display0.(?lXrObo8m_1#?)%1(?lXrObo8m_1#?)%2',
                    },
                ],
            }
        },
        HW_DISPLAY_DATA: {
            color: EntryStatic.colorSet.block.modi.OUTPUT,
            outerLine: EntryStatic.colorSet.block.modi.OUTPUT_OUTLINE,
            skeleton: 'basic',
            template: '%1 화면의 %2 에 변수 %3 보이기    ',
            params: [
                {
                    type: 'Indicator',
                    img: 'block_icon/modi_icon/display.svg',
                    size: 11,
                },
                {
                    type: 'Dropdown',
                    options: [['첫째 줄', 0], ['둘째 줄', 20], ['셋째 줄', 40]],
                    value: 0,
                    fontSize: 10,
                    bgColor: EntryStatic.colorSet.block.modi.OUTPUT_OUTLINE,
                    arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                },
                {
                    type: 'Block',
                    accept: 'string',
                    defaultType: 'number',
                },
              
            ],
            events: {},
            def: {
                params: [
                    null,
                    0,
                    {
                        type: 'number',
                        params: ['0'],
                    },
                ],
                type: 'HW_DISPLAY_DATA',
            },
            paramsKeyMap: {
                name: 0,
                text: 1,
            },
            class: 'display',
            isNotFor: ['modi'],
            func: function (sprite, script) {
                return script.callReturn();
            },
            syntax: {
                js: [
                    {
                        syntax: 'this.display_01.writeVariable(1,%2,%3);',
                        template: 'this.display_01.writeVariable(1,%2,%3);',
                    },
                ],

                py : [
                    {
                        syntax: 'display.write_variable(1,%2,%3);',
                        template: 'display.write_variable(1,%2,%3);',
                    }
                ],
                c: [
                    {
                        syntax: 'display0.setVariable(2,%1,%2);',
                        template: 'display0.setVariable(2,%1,%2);',
                    },
                ],
            }
        },
        HW_DISPLAY_IMAGE: {
            color: EntryStatic.colorSet.block.modi.OUTPUT,
            outerLine: EntryStatic.colorSet.block.modi.OUTPUT_OUTLINE,
            skeleton: 'basic',
            template: '%1 화면에 그림 %2보이기',
            params: [
                {
                    type: 'Indicator',
                    img: 'block_icon/modi_icon/display.svg',
                    size: 11,
                },
                
                {
                    type: 'Dropdown',
                    options: [
                        ['환하게 웃는','res/smileb.bmp'],
                        ['사랑에 빠진','res/love.bmp'],
                        ['미소짓는 ','res/smiling.bmp'],
                        ['화난','res/angry.bmp'],
                        ['지친','res/tired.bmp'],
                        ['놀란','res/surprise.bmp'],
                        ['우는','res/cry.bmp'],
                        ['어지러운','res/dizzy.bmp'],
                        ['모른척 하는','res/bilnd.bmp'],
                        ['자는','res/sleeping.bmp'],
                        ['당황한','res/emv.bmp'],
                        ['뿌듯한','res/proud.bmp'],
                        ['악마','res/devil.bmp'],
                        ['천사','res/angel.bmp'],
                        ['용','res/dragon.bmp'],
                        ['산타','res/santa.bmp'],
                        ['루돌프','res/ludolf.bmp'],
                        ['유령','res/ghost.bmp'],
                        ['마녀','res/witch.bmp'],
                        ['할로윈 호박','res/pumpkin.bmp'],
                        ['지팡이','res/wand.bmp'],
                        ['마술모자','res/hat.bmp'],
                        ['수정구슬','res/ball.bmp'],
                        ['물약','res/potion.bmp'],
                        ['강아지','res/dog.bmp'],
                        ['고양이','res/cat.bmp'],
                        ['토끼','res/rabbit.bmp'],
                        ['병아리','res/chick.bmp'],
                        ['사자','res/lion.bmp'],
                        ['거북이','res/turtle.bmp'],
                        ['펭귄','res/penguin.bmp'],
                        ['나비','res/butfly.bmp'],
                        ['물고기','res/fish.bmp'],
                        ['돌고래','res/dolphin.bmp'],
                        ['고슴도치','res/hedgeh.bmp'],
                        //*
                        ['참새 한 마리','res/1bird.bmp'],
                        ['참새 두 마리','res/2birds.bmp'],
                        ['참새 세 마리','res/3birds.bmp'],

                        ['꽃','res/flower.bmp'],
                        ['나무','res/tree.bmp'],
                        ['해','res/sun.bmp'],
                        ['별','res/star.bmp'],
                        ['달','res/moon.bmp'],
                        ['지구','res/earth.bmp'],
                        ['우주','res/space.bmp'],
                        ['구름','res/cloud.bmp'],
                        ['비','res/rain.bmp'],
                        ['눈','res/snow.bmp'],
                        ['바람','res/wind.bmp'],
                        ['번개','res/thunder.bmp'],
                        ['물방울','res/water.bmp'],
                        ['불','res/fire.bmp'],
                        ['자동차','res/car.bmp'],
                        ['배','res/ship.bmp'],
                        ['비행기','res/airplane.bmp'],
                        ['기차','res/train.bmp'],
                        ['버스','res/bus.bmp'],
                        ['경찰차','res/policec.bmp'],
                        ['구급차','res/ambul.bmp'],
                        ['로켓','res/rocket.bmp'],
                        ['열기구','res/hotair.bmp'],
                        ['헬리곱터','res/helicop.bmp'],
                        ['스포츠카','res/sportsc.bmp'],
                        ['자전거','res/bicycle.bmp'],
                        ['학교','res/school.bmp'],
                        ['공원','res/park.bmp'],
                        ['병원','res/hospital.bmp'],
                        ['빌딩','res/build.bmp'],
                        ['아파트','res/apart.bmp'],
                        ['놀이공원','res/amuse.bmp'],
                        ['벽돌집','res/brick.bmp'],
                        ['통나무집','res/cabin.bmp'],
                        ['지푸라기집','res/straw.bmp'],
                        ['공터','res/vacant.bmp'],
                        ['밭','res/field.bmp'],
                        ['산','res/mountain.bmp'],
                        ['사과','res/apple.bmp'],
                        ['바나나','res/banana.bmp'],
                        ['딸기','res/strawb.bmp'],
                        ['복숭아','res/peach.bmp'],
                        ['수박','res/waterm.bmp'],
                        ['치킨','res/chicken.bmp'],
                        ['피자','res/pizza.bmp'],
                        ['햄버거','res/hamburg.bmp'],
                        ['케이크','res/cake.bmp'],
                        ['국수','res/nuddle.bmp'],
                        ['도넛','res/donut.bmp'],
                        ['사탕','res/candy.bmp'],
                        ['통신','res/comm.bmp'],
                        ['배터리','res/battery.bmp'],
                        ['다운로드','res/download.bmp'],
                        ['체크','res/check.bmp'],
                        ['엑스','res/x.bmp'],
                        ['실행','res/play.bmp'],
                        ['정지','res/stop2.bmp'],
                        ['일시정지','res/pause.bmp'],
                        ['전원','res/power.bmp'],
                        ['전구','res/bulb.bmp'],
                        ['직진 표지판','res/straigh.bmp'],
                        ['좌회전 표지판','res/lefts.bmp'],
                        ['우회전 표지판','res/rights.bmp'],
                        ['멈춤 표지판','res/stop.bmp'],
                        ['당첨','res/prize.bmp'],
                        ['꽝','res/losing.bmp'],
                        ['재시도','res/retry.bmp'],
                        ['엄지척','res/thumbs.bmp'],
                        ['가위','res/scissors.bmp'],
                        ['바위','res/rock.bmp'],
                        ['보','res/paper.bmp'],
                        ['위쪽 화살표','res/up.bmp'],
                        ['아래쪽 화살표','res/down.bmp'],
                        ['오른쪽 화살표','res/righta.bmp'],
                        ['왼쪽 화살표','res/lefta.bmp'],
                        ['하트','res/heart.bmp'],
                        ['음표','res/note.bmp'],
                        ['아기','res/baby.bmp'],
                        ['여자아이','res/girl.bmp'],
                        ['남자아이','res/boy.bmp'],
                        ['여자어른','res/women.bmp'],
                        ['남자어른','res/men.bmp'],
                        ['할머니','res/grandm.bmp'],
                        ['할아버지','res/grandf.bmp'],
                        ['선생님','res/teacher.bmp'],
                        ['프로그래머','res/program.bmp'],
                        ['경찰','res/police.bmp'],
                        ['의사','res/doctor.bmp'],
                        ['농부','res/farmer.bmp'],
                        ['게임기','res/game.bmp'],
                        ['마이크','res/microp.bmp'],
                        ['스피커','res/speaker.bmp'],
                        ['시계','res/watch.bmp'],
                        ['전화기','res/tele.bmp'],
                        ['카메라','res/camera.bmp'],
                        ['TV','res/tv.bmp'],
                        ['라디오','res/radio.bmp'],
                        ['책','res/book.bmp'],
                        ['현미경','res/micros.bmp'],
                        ['망원경','res/teles.bmp'],
                        ['쓰레기통','res/waste.bmp'],
                        ['마스크','res/mask.bmp'],
                        ['깃발','res/flag.bmp'],
                        ['편지','res/letter.bmp'],
                        ['축구공','res/soccer.bmp'],
                        ['농구공','res/basket.bmp'],
                        ['피아노','res/piano.bmp'],
                        ['기타','res/gittar.bmp'],
                        ['드럼','res/drum.bmp'],
                        ['사이렌','res/siren.bmp'],
                        ['선물 상자','res/giftbox.bmp'],
                        ['왕관','res/crown.bmp'],
                        ['주사위','res/dice.bmp'],
                        ['메달','res/medal.bmp'],
                        ['열쇠','res/key.bmp'],
                        ['보석','res/jewerly.bmp'],
                        ['동전','res/coin.bmp'],
                    ],
                    // value : 'res/smileb.bmp',
                    fontSize: 11,
                    bgColor: EntryStatic.colorSet.block.modi.OUTPUT_OUTLINE,
                    arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                },
              
            ],
            events: {},
            def: {
                params: [
                    '환하게 웃는',
                    'res/smileb.bmp',
                ],
                type: 'HW_DISPLAY_IMAGE',
            },
            paramsKeyMap: {
                name: 0,
                text: 1,
            },
            class: 'display',
            isNotFor: ['modi'],
            func: function (sprite, script) {
                return script.callReturn();
            },
            syntax: {
                js: [
                    {
                        syntax: 'this.display_01.drawPicture(0, 0, "%2");',
                        template: 'this.display_01.drawPicture(0, 0, "%2");',
                    },
                ],

                py: [
                    {
                        syntax: 'display.draw_picture = 0, 0, "%2"',
                        template: 'display.draw_picture = 0, 0, "%2"',
                    }
                ],
                c: [
                    {
                        syntax: 'display0.drawPicture?%1',
                        template: 'display0.drawPicture?%1',
                    },
                ],
            }
        },
        HW_DISPLAY_RESET: {
            color: EntryStatic.colorSet.block.modi.OUTPUT,
            outerLine: EntryStatic.colorSet.block.modi.OUTPUT_OUTLINE,
            skeleton: 'basic',
            template: '%1 화면 전체 지우기    ',
            params: [
                {
                    type: 'Indicator',
                    img: 'block_icon/modi_icon/display.svg',
                    size: 11,
                },
            ],
            events: {},
            def: {
                params: [
                    null,
                ],
                type: 'HW_DISPLAY_RESET',
            },
            paramsKeyMap: {
                name: 0,
                text: 1,
            },
            class: 'display',
            isNotFor: ['modi'],
            func: function (sprite, script) {
                return script.callReturn();
            },
            syntax: {
                js: [
                    {
                        syntax: 'this.display_01.reset();',
                        template: 'this.display_01.reset();',
                    },
                ],
                c: [
                    {
                        syntax: 'display0.setReset();',
                        template: 'display0.setReset();',
                    },
                ],
            }
        },
        HW_DISPLAY_MOVE: {
            color: EntryStatic.colorSet.block.modi.OUTPUT,
            outerLine: EntryStatic.colorSet.block.modi.OUTPUT_OUTLINE,
            skeleton: 'basic',
            template: '%1 화면을 %2(으)로 %3px만큼, %4(으)로 %5px만큼 이동하기    ',
            params: [
                {
                    type: 'Indicator',
                    img: 'block_icon/modi_icon/display.svg',
                    size: 11,
                },
                {
                    type: 'Dropdown',
                    options: [
                        ['오른쪽', 'H+'],
                        ['왼쪽', 'H-'],
                    ],
                    fontSize: 10,
                    bgColor: EntryStatic.colorSet.block.modi.OUTPUT_OUTLINE,
                    arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                },
                {
                    type: 'Block',
                    accept: 'string',
                    defaultType: 'number',
                },
                {
                    type: 'Dropdown',
                    options: [
                    
                        ['아래', 'V+'],
                        ['위', 'V-'],
                    ],
                    fontSize: 10,
                    bgColor: EntryStatic.colorSet.block.modi.OUTPUT_OUTLINE,
                    arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                },
                {
                    type: 'Block',
                    accept: 'string',
                    defaultType: 'number',
                },
              
            ],
            events: {},
            def: {
                params: [
                   null,
                    'H+',
                    {
                        type: 'text',
                        params: ['0'],
                    },
                    'V+',
                    
                    {
                        type: 'text',
                        params: ['0'],
                    },

                ],
                type: 'HW_DISPLAY_MOVE',
            },
            paramsKeyMap: {
                name: 0,
                text: 1,
            },
            class: 'display',
            isNotFor: ['modi'],
            func: function (sprite, script) {
                return script.callReturn();
            },
            syntax: {

                js: [
                    {
                        syntax: '%2?%3?%4?%5',
                        template: 'this.display_01.writeVariable(1,%2,%3);',
                    },
                ],


                py: [
                    {
                        syntax: '%2?%3?%4?%5',
                        template: 'display.move_screen = %2?%3?%4?%5',
                    },
                ],
            }
        },
        HW_NETWORK_BELL: {
            color: EntryStatic.colorSet.block.modi.SETUP,
            outerLine: EntryStatic.colorSet.block.modi.SETUP_OUTLINE,
            skeleton: 'basic',
            template: '%1 네트워크 벨 소리 %2 으로 정하기   ',
            params: [
                {
                    type: 'Indicator',
                    img: 'block_icon/modi_icon/network.svg',
                    size: 11,
                },
                {
                    type: 'Dropdown',
                    options: [
                        ['울림', 'setBuzzer(BUZZER_ON)'],
                        ['안 울림', 'setBuzzer(BUZZER_OFF)'],
                    ],
                    fontSize: 11,
                    bgColor: EntryStatic.colorSet.block.modi.SETUP_OUTLINE,
                    arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                },
               
            ],
            events: {},
            def: {
                params: [
                    null,
                    'setBuzzer(BUZZER_ON)'
                ],
                type: 'HW_NETWORK_BELL',
            },

            class: 'network',
            isNotFor: ['modi'],

            syntax: {

                js: [
                    {
                        syntax: 'this.network_01.%2',
                        template: 'network.%2',
                    }
                ],

                py: [
                    {
                        syntax: '(network.%2)',
                        template: 'network.%2',
                    }
                ],
                c: [
                    {
                        syntax: 'network0.setBuzzer(%1);\n\tsleep(50);',
                        template: 'network0.setBuzzer(%1);\n\tsleep(50);',
                    },
                ],
            }
        },
     
        HW_NETWORK_BTN_JUDGEMENT: {
            color: EntryStatic.colorSet.block.modi.SETUP,
            outerLine: EntryStatic.colorSet.block.modi.SETUP_OUTLINE,
            fontColor: '#fff',
            skeleton: 'basic_boolean_field',
            template: '%1 네트워크 버튼이 %2',
            params: [
                {
                    type: 'Indicator',
                    img: 'block_icon/modi_icon/network.svg',
                    size: 11,
                },
                {
                    type: 'Dropdown',
                    options: [
                        ['클릭', 'getButtonClick(0)'],
                        ['두 번 클릭', 'getButtonDoubleClick(0)'],
                        ['누른 상태', 'getButtonPressed(0)'],
                       
                    ],
                    fontSize: 11,
                    bgColor: EntryStatic.colorSet.block.modi.SETUP_OUTLINE,
                    arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                }
               
            ],
            def: {                
                params: [null, 'getButtonClick(0)'],
                type: 'HW_NETWORK_BTN_JUDGEMENT',
            },
            paramsKeyMap: {
                property: 0,
            },
            class: 'network',
            isNotFor: ['modi'],

            syntax: {
                js: [
                    {
                        syntax: 'this.network_01.%2 == TRUE',
                        template: 'network.%2',
                    }
                ],
                py:[
                    {
                        syntax: 'network.%2',
                        template: 'network.%2',
                    },
                ],
                c: [
                    {
                        syntax: '(network0.%2() == %3)',
                        template: '(network0.%2() == %3)',
                    },
                ],
            },
        },

        HW_NETWORK_BTN: {
            color: EntryStatic.colorSet.block.modi.SETUP,
            outerLine: EntryStatic.colorSet.block.modi.SETUP_OUTLINE,
            fontColor: '#fff',
            skeleton: 'basic_string_field',
            template: '%1 네트워크 버튼 %2',
            params: [
                {
                    type: 'Indicator',
                    img: 'block_icon/modi_icon/network.svg',
                    size: 11,
                },
                {
                    type: 'Dropdown',
                    options: [
                        ['클릭', 'getButtonClick(0)'],
                        ['두 번 클릭', 'getButtonDoubleClick(0)'],
                        ['누르기', 'getButtonPressed(0)'],
                        
                    ],
                    fontSize: 11,
                    bgColor: EntryStatic.colorSet.block.modi.SETUP_OUTLINE,
                    arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                },
             
            ],
            def: {
                params: [null, 'getButtonClick(0)'],
                type: 'HW_NETWORK_BTN',
            },
            paramsKeyMap: {
                property: 0,
            },
            class: 'network',
            isNotFor: ['modi'],

            syntax: {
                js: [
                    {
                        syntax: 'this.network_01.%2',
                        template: 'this.network_01.%2',
                    }
                ],
                py: [
                    {
                        syntax: 'network.%2',
                        template: 'network.%2',
                    }
                ],
                c: [
                    {
                        syntax: 'network0.%2()',
                        template: 'network0.%2()',
                    },
                ],
            },
        },

        HW_NETWORK_SWITCH_JUDGEMENT: {
            color: EntryStatic.colorSet.block.modi.SETUP,
            outerLine: EntryStatic.colorSet.block.modi.SETUP_OUTLINE,
            fontColor: '#fff',
            skeleton: 'basic_boolean_field',
            template: '%1 네트워크 스위치가 %2',
            params: [
                {
                    type: 'Indicator',
                    img: 'block_icon/modi_icon/network.svg',
                    size: 11,
                },
                {
                    type: 'Dropdown',
                    options: [
                        ['켜짐', '100'],
                        ['꺼짐', '0'],
                      
                    ],
                    fontSize: 11,
                    bgColor: EntryStatic.colorSet.block.modi.SETUP_OUTLINE,
                    arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                }
               
            ],
            def: {                
                params: [null, '100'],
                type: 'HW_NETWORK_SWITCH_JUDGEMENT',
            },
            paramsKeyMap: {
                property: 0,
            },
            class: 'network',
            isNotFor: ['modi'],

            syntax: {
                js: [
                    {
                        syntax: 'this.network_01.getSwitchToggle(0) == %2',
                        template: 'this.network_01.%2',
                    }
                ],
                py:[
                    {
                        syntax: 'network.switch_toggled == %2',
                        template: 'network.%2',
                    },
                ],
                c: [
                    {
                        syntax: '(network0.%2() == %3)',
                        template: '(network0.%2() == %3)',
                    },
                ],
            },
        },

        HW_NETWORK_SWITCH: {
            color: EntryStatic.colorSet.block.modi.SETUP,
            outerLine: EntryStatic.colorSet.block.modi.SETUP_OUTLINE,
            fontColor: '#fff',
            skeleton: 'basic_string_field',
            template: '%1 네트워크 스위치의 상태',
            params: [
                {
                    type: 'Indicator',
                    img: 'block_icon/modi_icon/network.svg',
                    size: 11,
                },
    
               
            ],
            def: {                
                params: [null],
                type: 'HW_NETWORK_SWITCH',
            },
            paramsKeyMap: {
                property: 0,
            },
            class: 'network',
            isNotFor: ['modi'],

            syntax: {
                js: [
                    {
                        syntax: 'this.network_01.getSwitchToggle(0)',
                        template: 'this.network_01.%2',
                    }
                ],
                py:[
                    {
                        syntax: 'network.switch_toggled',
                        template: 'network.%2',
                    },
                ],
                c: [
                    {
                        syntax: '(network0.%2() == %3)',
                        template: '(network0.%2() == %3)',
                    },
                ],
            },
        },
       
        HW_NETWORK_DIAL_JUDGEMENT: {
            color: EntryStatic.colorSet.block.modi.SETUP,
            outerLine: EntryStatic.colorSet.block.modi.SETUP_OUTLINE,
            fontColor: '#fff',
            skeleton: 'basic_boolean_field',
            template: '%1 네트워크 다이얼의 위치 %2 %3%',
            params: [
                {
                    type: 'Indicator',
                    img: 'block_icon/modi_icon/network.svg',
                    size: 11,
                },
                {
                    type: 'Dropdown',
                    options: [
                        ['>', '>'],
                        ['<', '<'],
                        ['≥', '>='],
                        ['≤', '<='],
                        ['=', '=='],
                        ['≠', '!='],
                    ],
                    fontSize: 11,
                    bgColor: EntryStatic.colorSet.block.modi.SETUP_OUTLINE,
                    arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                },
             
                {
                    type: 'Block',
                    accept: 'string',
                },
            ],
            def: {
                params: [
                    null,    
                    '>',
                    {
                        type: 'text',
                        params: ['0'],
                    },
                ],
                type: 'HW_NETWORK_DIAL_JUDGEMENT',
            },
            paramsKeyMap: {
                name: 0,
                property: 1,
            },
            class: 'network',
            isNotFor: ['modi'],

            syntax: {

                js: [
                    {
                        syntax: 'this.network_01.getDialTurn(0) %2 %3 == true',
                        template: 'this.network_01.getDialTurn(0) %2 %3 == true',
                    }
                ],

                py : [
                    {
                        syntax: '(network.dial_turn %2 %3)',
                        template: 'network.dial_turn %2 %3',
                    }
                ],
                c: [
                    {
                        syntax: 'network0.getDialTurn()',
                        template: 'network0.getDialTurn()',
                    },
                ],
            },
        },

        HW_NETWORK_DIAL: {
            color: EntryStatic.colorSet.block.modi.SETUP,
            outerLine: EntryStatic.colorSet.block.modi.SETUP_OUTLINE,
            fontColor: '#fff',
            skeleton: 'basic_string_field',
            template: '%1 네트워크 다이얼의 위치(%)',
            params: [
                {
                    type: 'Indicator',
                    img: 'block_icon/modi_icon/network.svg',
                    size: 11,
                }
              
            ],
            def: {
                params: [null],
                type: 'HW_NETWORK_DIAL',
            },
            paramsKeyMap: {
                name: 0,
                property: 1,
            },
            class: 'network',
            isNotFor: ['modi'],

            syntax: {
                js: [
                    {
                        syntax: 'this.network_01.getDialTurn(0)',
                        template: 'this.network_01.getDialTurn(0)',
                    }
                ],
                py: [
                    {
                        syntax: '(network.dial_turn)',
                        template: '(%2)',
                    },
                ],
                c: [
                    {
                        syntax: 'network0.getDialTurn()',
                        template: 'network0.getDialTurn()',
                    },
                ],
            },
        },
        // modi_network_button_true : {},
        // modi_network_button_false : {},
        HW_NETWORK_JOYSTICK_JUDGEMENT: {
            color: EntryStatic.colorSet.block.modi.SETUP,
            outerLine: EntryStatic.colorSet.block.modi.SETUP_OUTLINE,
            fontColor: '#fff',
            skeleton: 'basic_boolean_field',
            template: '%1 네트워크 조이스틱이 %2',
            params: [
                {
                    type: 'Indicator',
                    img: 'block_icon/modi_icon/network.svg',
                    size: 11,
                },
                {
                    type: 'Dropdown',
                    options: [
                        ['원점', 0],
                        ['위', 100],
                        ['아래', -100],
                        ['왼쪽', -50],
                        ['오른쪽', 50],
                       
                    ],
                    fontSize: 11,
                    bgColor: EntryStatic.colorSet.block.modi.SETUP_OUTLINE,
                    arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                },
              
            ],
            def: {
                params: [null, 0],
                type: 'HW_NETWORK_JOYSTICK_JUDGEMENT',
            },
            paramsKeyMap: {
                property: 0,
            },
            class: 'network',
            isNotFor: ['modi'],

            syntax: {
                js: [
                    {
                        syntax: 'this.network_01.getJoystickDirection(0) == %2',
                        template: 'this.network_01.getJoystickDirection(0)',
                    }
                ],
                py: [
                    {
                        syntax: '(network.joystick_direction == %2)',
                        template: '(network.joystick_direction == %2)',
                    }
                ],
                c: [
                    {
                        syntax: '(network0.getJoystickDirection() == %2)',
                        template: '(network0.getJoystickDirection() == %2)',
                    },
                ],
            },
        },
        HW_NETWORK_JOYSTICK: {
            color: EntryStatic.colorSet.block.modi.SETUP,
            outerLine: EntryStatic.colorSet.block.modi.SETUP_OUTLINE,
            fontColor: '#fff',
            skeleton: 'basic_string_field',
            template: '%1 네트워크 조이스틱의 위치',
            params: [
                {
                    type: 'Indicator',
                    img: 'block_icon/modi_icon/network.svg',
                    size: 11,
                },
            ],
            def: {
                params: [null],
                type: 'HW_NETWORK_JOYSTICK',
            },
            paramsKeyMap: {
                property: 0,
            },
            class: 'network',
            isNotFor: ['modi'],

            syntax: {
                js: [
                    {
                        syntax: 'this.network_01.getJoystickDirection(0)',
                        template: 'this.network_01.getJoystickDirection(0)',
                    }
                ],
                py: [
                    {
                        syntax: 'network.joystick_direction',
                        template: '(network.joystick_direction == %2)',
                    }
                ],
                c: [
                    {
                        syntax: 'network0.getJoystickDirection()',
                        template: 'network0.getJoystickDirection()',
                    },
                ],
            },
        },
     
        HW_NETWORK_SLIDER_JUDGEMENT: {
            color: EntryStatic.colorSet.block.modi.SETUP,
            outerLine: EntryStatic.colorSet.block.modi.SETUP_OUTLINE,
            fontColor: '#fff',
            skeleton: 'basic_boolean_field',
            template: '%1 네트워크 슬라이더의 위치%2 %3%',
            params: [
                {
                    type: 'Indicator',
                    img: 'block_icon/modi_icon/network.svg',
                    size: 11,
                },
                {
                    type: 'Dropdown',
                    options: [
                        ['>', '>'],
                        ['<', '<'],
                        ['≥', '>='],
                        ['≤', '<='],
                        ['=', '=='],
                        ['≠', '!='],
                    ],
                    fontSize: 11,
                    bgColor: EntryStatic.colorSet.block.modi.SETUP_OUTLINE,
                    arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                },
                {
                    type: 'Block',
                    accept: 'string',
                },
             
            ],
            def: {
                params: [
                    null,
                    '>',
                    {
                        type: 'text',
                        params: ['0'],
                    }
                ],
                type: 'HW_NETWORK_SLIDER_JUDGEMENT',
            },
            paramsKeyMap: {
                name: 0,
                property: 1,
            },
            class: 'network',
            isNotFor: ['modi'],

            syntax: {
                js: [
                    {
                        syntax: 'this.network_01.getSliderPosition(0) %2 %3 == true',
                        template: 'this.network_01.getJoystickDirection(0)',
                    }
                ],

                py: [
                    {
                        syntax: '(network.slider_position %2 %3)',
                        template: 'network.slider_position %2 %3',
                    }
                ],

                c: [
                    {
                        syntax: 'network0.get%2SliderPosition()',
                        template: 'network0.get%2SliderPosition()',
                    },
                ],
            },
        },
        HW_NETWORK_SLIDER: {
            color: EntryStatic.colorSet.block.modi.SETUP,
            outerLine: EntryStatic.colorSet.block.modi.SETUP_OUTLINE,
            fontColor: '#fff',
            skeleton: 'basic_string_field',
            template: '%1 네트워크 슬라이더의 위치(%)',
            params: [
                {
                    type: 'Indicator',
                    img: 'block_icon/modi_icon/network.svg',
                    size: 11,
                },
              
            ],
            def: {
                params: [null],
                type: 'HW_NETWORK_SLIDER',
            },
            paramsKeyMap: {
                name: 0,
                property: 1,
            },
            class: 'network',
            isNotFor: ['modi'],

            syntax: {

                js: [
                    {
                        syntax: 'this.network_01.getSliderPosition(0)',
                        template: 'this.network_01.getJoystickDirection(0)',
                    }
                ],

                py: [
                    {
                        syntax: 'network.slider_position',
                        template: 'network.slider_position',
                    }
                ],

                c: [
                    {
                        syntax: 'network0.get%2SliderPosition()',
                        template: 'network0.get%2SliderPosition()',
                    },
                ],
            },
        },
        

        HW_NETWORK_TIMER_JUDGEMENT: {
            color: EntryStatic.colorSet.block.modi.SETUP,
            outerLine: EntryStatic.colorSet.block.modi.SETUP_OUTLINE,
            fontColor: '#fff',
            skeleton: 'basic_boolean_field',
            template: '%1 네트워크 타이머가 %2',
            params: [
                {
                    type: 'Indicator',
                    img: 'block_icon/modi_icon/network.svg',
                    size: 11,
                },
                {
                    type: 'Dropdown',
                    options: [
                        ['종료', 0],
                        ['진행 중', 100],
                        
                    ],
                    fontSize: 11,
                    bgColor: EntryStatic.colorSet.block.modi.SETUP_OUTLINE,
                    arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                },
               
            ],
            def: {
                params: [null, 0],
                type: 'HW_NETWORK_TIMER_JUDGEMENT',
            },
            paramsKeyMap: {
                name: 0,
                property: 1,
            },
            class: 'network',
            isNotFor: ['modi'],

            syntax: {

                js: [
                    {
                        syntax: 'this.network_01.getTimerReached() == %2 ',
                        template: 'this.network_01.getTimerReached)',
                    }
                ],


                py: [
                    {
                        syntax: '(network.time_up  == %2)',
                        template: '(network.time_up  == %2)',
                    },
                ],
            },
        },
        HW_NETWORK_TIMER: {
            color: EntryStatic.colorSet.block.modi.SETUP,
            outerLine: EntryStatic.colorSet.block.modi.SETUP_OUTLINE,
            fontColor: '#fff',
            skeleton: 'basic_string_field',
            template: '%1 네트워크 타이머의 상태',
            params: [
                {
                    type: 'Indicator',
                    img: 'block_icon/modi_icon/network.svg',
                    size: 11,
                },
               
            ],
            def: {
                params: [null],
                type: 'HW_NETWORK_TIMER',
            },
            paramsKeyMap: {
                name: 0,
                property: 1,
            },
            class: 'network',
            isNotFor: ['modi'],

            syntax: {

                js: [
                    {
                        syntax: 'this.network_01.getTimerReached()',
                        template: 'this.network_01.getTimerReached)',
                    }
                ],

                py: [
                    {
                        syntax: '(network.time_up)',
                        template: '(network.time_up)',
                    },
                ],
                c: [
                    {
                        syntax: 'network0.getTimerReached()',
                        template: 'network0.getTimerReached()',
                    },
                ],
            },
        },
        HW_NETWORK_TIMER_MENU: {
            color: EntryStatic.colorSet.block.modi.SETUP,
            outerLine: EntryStatic.colorSet.block.modi.SETUP_OUTLINE,
            fontColor: '#fff',
            skeleton: 'basic_string_field',
            template: '%2 %1',
            params: [
                {
                    type: 'Dropdown',
                    options: [
                        ['진행 중', 'TIMER_UNREACHED'],
                        ['종료', 'TIMER_REACHED'],
                    ],
                    fontSize: 11,
                    bgColor: EntryStatic.colorSet.block.modi.SETUP_OUTLINE,
                    arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                },
                {
                    type: 'Indicator',
                    img: 'block_icon/modi_icon/network.svg',
                    size: 11,
                },
            ],
            def: {
                params: ['TIMER_UNREACHED'],
                type: 'HW_NETWORK_TIMER_MENU',
            },
            class: 'network',
            isNotFor: ['modi'],
            syntax: {
                js: [],
                py: [],
                c: [
                    {
                        syntax: '%1',
                        template: '%1',
                    },
                ],
            },
        },
    };
};
//endregion modi 모디

module.exports = Entry.MODI;
