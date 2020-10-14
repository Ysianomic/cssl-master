
//스크립트 코드는 뺀다. 순수 자스코드만 작성
//모든 페이지에서 공통으로 사용하는 변수나 함수를 .js로 외부파일로 보통 작성한다.

        /*
    [form객체 얻는 방법]

    가정]form의 하위 객체로
    아이디: <input type="text" name="choi"/>

    ※form객체를 이용해서 form의 하위객체 얻기
    원칙]form객체.name속성에 지정한 값 :form객체.choi


    1]<form>:form에 id및 name속성 지정 안한 경우
    -document.forms(HTMLCollection) 이용
    예]해당 HTML문서에서 첫번째
    form태그인 경우:document.forms[0].choi

    2]<form name="폼이름">:form에 name속성 지정한 경우(가장 코드가짧고 많이 씀)

    -바로 폼이름이 form객체가 됨
    <form name="frmObj">
    예]폼이름.name속성에 지정한 값
    frmObj.choi

    3]<form id="id명">:form에 id속성 지정한 경우

    - document.getElementById("id명").choi

    4]document객체의 getElementsByTagName("form")[인덱스].이름 혹은
    getElementsByName("폼이름")[인덱스].이름


    5]this.form키워드로 form객체를 얻어 올 수 있다.

    <input type="button" onclick="fnSubmit(this.form)"/>

    ※자바스크립트 코드로 submit시 submit이벤트는 발생하지 않는다
        
    */
       
        function isValidate(obj){
            if(obj.id.value==''){
                var err = document.getElementById('errId');
                console.log('%O',obj.Gender);
                err.innerHTML='아이디를 입력하세요.';
                //alert()를 span태그사이에 텍스트로 메시지를 보여주세요.
                //alert('아이디를 입력하세요');
                obj.id.focus();
                obj.id.onkeydown = function(){
                    err.style.display='none';
                }
                return false;
            }
            if(frmObj.pwd.length==0){
                alert('비밀번호를 입력하세요');
                frmObj.pwd.focus();
                return false;
            }
            if(frmObj.pwd2.value==''){
                alert('비밀번호확인란을 입력하세요');
                frmObj.pwd2.focus();
                return false;
            }
            else{
                if(frmObj.pwd2.value != frmObj.pwd.value){
                    alert('비밀번호가 일치하지않습니다.');
                    return false;
                }
            }
            //라디오버튼 선택여부 판단하기
            var isGender=false;
            //forEach문
            obj.gender.forEach(function(ele){
                if(ele.checked){
                    isGender=true;
                }
            });
            
            //일반 for문
           /*  for(var i=0;i<obj.gender.length;i++){
                if(obj.gender[i].checked){
                    isGender=true;
                    break;
                }
            } */
            if(!isGender){
                alert('성별을 선택하세요');
                obj.gender[0].focus();
                return false;
            }

            //문제.체크박스 3개이상 선택하도록 유효성 검사
            var count = 0;
            //체크안된 체크박스중에 처음것에 포커스를 주기위한 코드추가
            var notChecked=[];  //체크안된 체크박스들의 인덱스 저장

            for(var i=0;i<obj.inter.length;i++){
                if(obj.inter[i].checked){
                    ++count;
                }
                else{
                    notChecked.push(i);
                }
            }
            if(count<3){
                alert('관심사항을 최소 3개 선택하세요');
                obj.inter[notChecked[0]].focus();
                return false;
            }

            if(obj.grade.selectedIndex==0){
                alert('학력을 선택하세요.');
                obj.grade.focus();
                return false;
            }

            if(obj.file.value==''){
                alert('파일을 첨부하세요.');
                obj.file.focus();
                return false;
            }

            if(obj.self.value==''){
                alert('자기소개란을 입력하세요.');
                obj.self.focus();
                return false;
            }
            return true;
            
        }

        function fnNoSubmitButton(obj){
            console.log(isValidate(obj));   //undefined반환 함수를 호출했는데 값이 안나오므로
           
           if(obj == undefined){
               obj = document.forms[0];
           }
           /* 
            ※form 객체의 submit()함수로 전송
            */
            if(isValidate(obj)) obj.submit();   //자스코드로 전송하는 함수
        }

