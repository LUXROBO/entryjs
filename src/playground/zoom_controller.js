
// const interpreter = require('./playground/interpreter');
// import Filbert from '../../extern/util/filbert.js'
// import { threadId } from 'worker_threads';

'use strict';

Entry.ZoomController = class ZoomController {
    constructor(board) {
        this.boardMap = new Map();
        this.firstZoom = false;
        this.retryCount = 0;
        this.keyBlock = {};
        if (board) {
            this.setBoard(board);
        }
        if (Entry.windowResized) {
            Entry.windowResized.attach(this, this.setPosition);
        }
        
    }

    get CONTROLLER_WIDTH() {
        return 128;
    }

    get CONTROLLER_HEIGHT() {
        return 38;
    }

    get ZOOM_RANGE() {
        return [0.6, 0.8, 1, 1.3, 1.6, 2];
    }

    get ZOOM_MODE() {
        return {
            RESET: 0,
            OUT: 1,
            IN: 2,
        };
    }

    get view() {
        return this.svgGroup;
    }

    ZOOM_LEVEL = 2;

    generateView() {
        const zoomGroup = {
            svgZoom: this.nowBoard.svg.elem('g'),
        };
        this.renderStart(zoomGroup);
        this.addControl(zoomGroup);
    
    
        return zoomGroup;
    }

    renderStart(zoomGroup) {
        zoomGroup.svgZoom.elem('image', {
            href: ``,
            width: this.CONTROLLER_WIDTH,
            height: this.CONTROLLER_HEIGHT,
        });
        zoomGroup.reset = zoomGroup.svgZoom.elem('image', {
            href: `${Entry.mediaFilePath}custom/modi_btn_refresh.png`,
            x: 0,
            y: 3,
            width: 83,
            height: 91,
            filter: 'url(#entryButtonShadowFilter)',
            style: 'cursor: pointer;',
        });
        zoomGroup.export = zoomGroup.svgZoom.elem('image', {
            href: `${Entry.mediaFilePath}custom/modi_btn_export.png`,
            x: 93,
            y: 3,
            width: 83,
            height: 91,
            filter: 'url(#entryButtonShadowFilter)',
            style: 'cursor: pointer;',
            onClick :`window.android.uploadCode(${Entry.binaryOutput})`
        });
        zoomGroup.remote = zoomGroup.svgZoom.elem('image', {
            id:'remote',
            href: `${Entry.mediaFilePath}custom/modi_btn_remote_dis.png`,
            x: 181,
            y: 3,
            width: 83,
            height: 91,
            filter: 'url(#entryButtonShadowFilter)',
            style: 'cursor: pointer;',
        });

       

        if(global.Entry.deviceModel == "SM-T536" && global.Entry.guideList.length > 0) {

            const positionX = 170;
            const positionY = -670;
           
            zoomGroup.svgZoom.elem('image', {
                href: `${Entry.mediaFilePath}btn_zoom_bg.svg`,
                x: positionX,
                y: positionY-3,
                width: this.CONTROLLER_WIDTH,
                height: this.CONTROLLER_HEIGHT,
            });
            zoomGroup.zoomOut = zoomGroup.svgZoom.elem('image', {
                href: `${Entry.mediaFilePath}btn_zoom_out.svg`,
                x: 4 + positionX,
                y: positionY,
                width: 32,
                height: 32,
                filter: 'url(#entryButtonShadowFilter)',
                style: 'cursor: zoom-out;',
            });
            zoomGroup.zoomReset = zoomGroup.svgZoom.elem('image', {
                id: 'zoom_reset',
                href: `${Entry.mediaFilePath}btn_zoom_reset.svg`,
                x: 44 + positionX,
                y: positionY,
                width: 40,
                height: 32,
                filter: 'url(#entryButtonShadowFilter)',
                style: 'cursor: pointer;',
            });
            zoomGroup.zoomIn = zoomGroup.svgZoom.elem('image', {
                href: `${Entry.mediaFilePath}btn_zoom_in.svg`,
                x: 92 + positionX,
                y: positionY,
                width: 32,
                height: 32,
                filter: 'url(#entryButtonShadowFilter)',
                style: 'cursor: zoom-in;',
            });

            
        }
       
      
    }

    addControl(zoomGroup) {
        if (this.nowBoard) {
            $(zoomGroup.reset).bind('mousedown touchstart', (e) => {
                this.doAction('RESET');
            });
            $(zoomGroup.export).bind('mousedown touchstart', (e) => {
                this.doAction('EXPORT');
            });
            $(zoomGroup.remote).bind('mousedown touchstart', (e) => {
                this.doAction('REMOTE');
            });
        
            $(zoomGroup.svgZoom).bind('mousedown touchstart', (e) => {
                e.stopImmediatePropagation();
            });
            $(zoomGroup.zoomOut).bind('mousedown touchstart', (e) => {
                this.zoomChange(this.ZOOM_MODE.OUT);
            });
            $(zoomGroup.zoomReset).bind('mousedown touchstart', (e) => {
                this.zoomChange(this.ZOOM_MODE.RESET);
            });
            $(zoomGroup.zoomIn).bind('mousedown touchstart', (e) => {
                this.zoomChange(this.ZOOM_MODE.IN);
            });
        }
    }

    doAction(mode) {
        switch(mode) {
            case 'RESET':
                    createjs.Sound.play('entryMenuClick');
                    window.android.callFuntion('RESET');
                break;
            case 'EXPORT':

                    try { 

                    createjs.Sound.play('entryMenuClick');
                    let startBtnCount = 0;
                     
                    
                    const blockMap = this.nowBoard.code._blockMap;
                    console.log('blockMap', blockMap);
                    // window.android.log('blockMap : '+JSON.stringify(blockMap));
                    // window.android.entryRefresh();
                    // return;

                    const keys = Object.keys(blockMap) || [];
                    keys.forEach((id) => {
                        let block = blockMap[id];
                        if(block.data.type == 'when_run_button_click') {
                            this.keyBlock = block;
                            startBtnCount++;
                            if(startBtnCount > 1) {

                                // console.log('failUpload1');
                                window.android.failUpload('<내보내기 버튼을 클릭했을 때>\n코드 블록이 2개 이상이에요.\n1개만 남기고 삭제한 뒤\n내보내기를 다시 시도해 주세요.');
                                throw new Error('코드 블록이 2개 이상이에요.\n1개만 남기고 삭제한 뒤 내보내기를 다시 시도해 주세요.');
                            }
                        }         
                       
                        if(keys.length == 1 && blockMap[keys[0]].data.type == 'when_run_button_click') {
                            // console.log('failUpload4');
                            window.android.failUpload('default_code');
                            throw new Error('기본 코딩입니다.');
                        }

                        // console.log('block thread = ', block.getThread().getBlocks);

                    });

                    if(startBtnCount == 0) {
                        // console.log('failUpload3');
                        window.android.failUpload('<내보내기 버튼을 클릭했을 때>\n블록 없이는 내보내기를 할 수 없어요.\n다시 코딩을 한 뒤 내보내기를 시도해 주세요.');
                        throw new Error('기본 코딩입니다.');
                    }

    
                        const block = this.keyBlock;

        
                        // console.log('block : ' + JSON.stringify(block));

                        let parser = new Entry.Parser(Entry.Vim.WORKSPACE_MODE);
                        let syntax = parser.mappingSyntax(Entry.Vim.WORKSPACE_MODE);
        
                        // console.log('parser : ',parser);
                        console.log('syntax : ',syntax);
                     
                        // var blockToPyParser = new Entry.BlockToPyParser(syntax);
                        var blockToPyParser = new Entry.BlockToLuxJsParser(syntax);
                        blockToPyParser._parseMode = Entry.Parser.PARSE_GENERAL;
                        
                        let output = blockToPyParser.Thread(block.getThread());
                        // let output =  blockToPyParser.Thread(new Entry.Thread([blockSchema.def], code));

                        
                    
                        if(blockToPyParser._blockCount == 2 && blockToPyParser._secondBlock.data.type =='repeat_inf') {
                            console.log('failUpload2');
                            window.android.failUpload("default_code");
                            throw new Error('기본 코딩입니다.');
                        }

                        else if (blockToPyParser._blockCount == 1) {
                            console.log('failUpload1');
                            window.android.failUpload("default_code");
                            throw new Error('기본 코딩입니다.');
                        }

                        let judgement = '';
                        let binary = 'class UserTask extends ModiTask {\n\tconstructor(port) {\n\t\tsuper(port);\n\nmodule__\nvariable__\n}\ndoTask() {\n\tjudgement__\nthis.sleep(1000);\n';
                        let variable = ''
                        const variables = Entry.variableContainer.variables_


                        variables.forEach((el)=>{
                            variable += `this.${el.getId()} = 0;\n`
                        })

                        let checkJudgement = output.split('\n');

                        checkJudgement.forEach((el)=> {

                        
                            if(el.trim().startsWith('if((this.')) {
                                console.log('el', el);
                                judgement+=`${el}{};\n`;
                            }
                        })
                        
                        // 모듈 블럭 선언
                        // let moduleList = `\n${Entry.module}\n`;
                        // console.log('EntryStatic.moduleToBlocks', EntryStatic.moduleToBlocks);

                        // 코드
                        binary += `\t\t${output}\n}\n}`;
                        binary = binary.replace(/variable__/g, variable)
                        binary = binary.replace(/judgement__/g, judgement)
                        binary = binary.replace(/\t/g, "    ")

                        // console.log(binary);
                    
                        
                        // 모듈 연결 상태를 체크
                        const checkList = []
                        keys.forEach((id) => {
                                let block = blockMap[id];
                                
                                if(block._schema.def.category == 'modi') {
                                    checkList.push(block._schema.def.type)
                                }
                                 
                            }
                        )

                        console.log('checkList',checkList); 
                    
                        // const propertyName = `${unconnectedModules[0]}`.trim()
                        // const designatedModules = EntryStatic.moduleToBlocks[propertyName]
                        // const connectedModules = moduleList.match(/[a-z]*(?=0\()\d/g) || []

                        const designatedModules = EntryStatic.defaultModiList;
                        const disAvailableBlock = []

                        designatedModules.filter(module => {
                            
                            if(module.trim() == 'BATTERY' || module.trim() == 'NETWORK') {

                                return 
                            }
                            
    
                            checkList.forEach((item) => {
                       
                                if(EntryStatic.moduleToBlocks[module].includes(item) && !Entry.module.includes(module)) {
                
                                    disAvailableBlock.push(module)
                                }
                            
                            })                
                        }) 


                        // designatedModules에 포함된 모듈이 connectedModules에 없으면 unconnectedModules에 추가
        
                        if(disAvailableBlock.length > 0) { 

                            let module = ""

                            switch(disAvailableBlock[0]) {
                                case 'BUTTON':
                                    module = "버튼"
                                    break;

                                case 'DIAL':
                                    module = "다이얼"
                                    break;

                                case 'TOF':
                                    module = "거리"
                                    break;
                                case 'LED':
                                    module = "불빛"
                                    break;  
                                case 'SPEAKER':
                                    module = "스피커"
                                    break;  
                                case 'MOTORA':
                                    module = "모터 A"
                                    break;  
                                case 'MOTORB':
                                    module = "모터 B"
                                    break;  
                                case 'DISPLAY':
                                    module = "화면"
                                    break;  
    
                            }
                            console.log('disAvailableBlock', `'${module}'블록이 연결되지 않았어요\n사용할 모디 블록을 모두 연결해 주세요.`);
                            window.android.failUpload(`'${module}'블록이 연결되지 않았어요\n사용할 모디 블록을 모두 연결해 주세요.`);
                            
                            throw new Error(disAvailableBlock[0])
                        }

                        // const emojiRegex = /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/
                        const emojiRegex = /[\uD83C-\uDBFF\uDC00-\uDFFF]+/;
                        const emojiMatch = binary.match(emojiRegex)
                        
                        if(emojiMatch){

                            window.android.failUpload(`'${emojiMatch[0]}'는(은) 사용할 수 없어요!\n코딩한 내용을 다시 확인해 주세요.`);

                            throw new Error(emojiMatch[0])
                        }

                        const numberRegex = /([ㄱ-ㅎㅏ-ㅣ가-힣])/
                        const numberMatch = binary.match(numberRegex)
                        
                        if(numberMatch){

                            window.android.failUpload('숫자를 입력해 주세요.');

                            throw new Error(numberMatch[0])
                        }
        
                        window.android.uploadCode(binary)
                        // 프로젝트 저장
                        console.log('exportProject')
                        let project = Entry.exportProject();
                        Entry.project = project
                  
                    }

                    catch(e) {
                        
                        console.log('export error', e);

                        if( e.type === undefined && e.message.includes('length')) {
                            console.log('export length error');
                            window.android.failUpload('숫자를 입력해 주세요.');
                        }
        
                        if(e == 'thread') {
                            this.retryCount++;
                        }

                        if(this.retryCount >= 3) {
                            this.retryCount = 0;
                            window.android.entryRefresh();
                        }
                       
                    }
               
                
                break;
            case 'REMOTE':
                createjs.Sound.play('entryMenuClick');
                window.android.callFuntion('REMOTE');

                break;
           
            default:
                break;
        }
    }

    

    zoomChange(mode) {
        switch (mode) {
            case this.ZOOM_MODE.OUT:
                if (this.ZOOM_LEVEL > 0) {
                    this.ZOOM_LEVEL -= 1;
                    this.setScale(this.ZOOM_RANGE[this.ZOOM_LEVEL]);
                }
                break;
            case this.ZOOM_MODE.IN:
                if (this.ZOOM_LEVEL < this.ZOOM_RANGE.length - 1) {
                    this.ZOOM_LEVEL += 1;
                    this.setScale(this.ZOOM_RANGE[this.ZOOM_LEVEL]);
                }
                break;
            case this.ZOOM_MODE.RESET:
            default:
                const resetIndex = this.ZOOM_RANGE.indexOf(1);
                if (this.ZOOM_LEVEL !== resetIndex) {
                    this.ZOOM_LEVEL = 2;
                    this.setScale(this.ZOOM_RANGE[this.ZOOM_LEVEL]);
                }
                break;
        }
    }

    setScale(scale = 1) {
        const zoomGroup = this.boardMap.get(this.nowBoard);
        const { workspace } = this.nowBoard;
        workspace.setScale(scale);
    
        const { scroller } = this.nowBoard;
        scroller.resizeScrollBar && scroller.resizeScrollBar.call(scroller);
    }

    setPosition() {
        if (!this.nowBoard) {
            return;
        }
        var svgDom = this.nowBoard.svgDom;
        this.x = svgDom.width() - (this.CONTROLLER_WIDTH + 170);
        this.y = svgDom.height() - 100;
        // const svgDom = this.board.svgDom;
        
        this.align();

        // TODO: 임시 코드 (생성자 firstZoom)
        if (!this.firstZoom) {
            this.setScale(1.2);
            this.firstZoom = true;
        }
    }

    getPosition() {
        return {
            x: this.x,
            y: this.y,
        };
    }

    align() {
        var position = this.getPosition();
        this.boardMap.forEach((zoomGroup) => {
            zoomGroup.svgZoom.attr({
                transform: `translate(${position.x}, ${position.y})`,
            });
        });
    }

    setBoard(board) {
        this.nowBoard = board;
        const zoomGroup = this.boardMap.get(board);
        if (!zoomGroup) {
            this.boardMap.set(board, this.generateView());
        }
        this.setPosition();
    }

    destroy() {
       
        delete this.nowBoard;
        delete this.boardMap;
    }
};
