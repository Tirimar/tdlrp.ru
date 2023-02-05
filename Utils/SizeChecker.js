import $api from "../http";

export default function createReader(file, username, showBubble, choose) {
         var reader = new FileReader;
         reader.onload = function (evt) {
             var image = new Image()
             image.onload = function (evt) {
                 var width = this.width;
                 var height = this.height;
                 check(file, [width, height], username, showBubble, choose)
             };
             image.src = evt.target.result;
         };
         reader.readAsDataURL(file);
}
//64/32 22/17
 function check(file, size, username, showBubble, choose){
    if(file.type == "image/png" && file.name.split(".")[1] == "png"){
         if ((size[0] == 64 && size[1] == 64) || (size[0] == 64 && size[1] == 32) || (size[0] == 22 && size[1] == 17)){
             const formData = new FormData();
             formData.append('username', username);
             formData.append('file', file);
             if(choose == "skin" && ((size[0] == 64 && size[1] == 64) || (size[0] == 64 && size[1] == 32))){
                 $api.post('/upload/skin', formData);
                 showBubble("Скин загружен")
                 return true
             }
             if(choose == "cape" && ((size[0] == 64 && size[1] == 32) || (size[0] == 22 && size[1] == 17))){
                 $api.post('/upload/cloak', formData);
                 showBubble("Плащ загружен")
                 return true
             } else showBubble("Неверный размер плаща");
             return true;
         }else {
             showBubble("Неверный размер");
             return false;
         }
     }else {
         showBubble("Неверный формат файла");
         return false;
     }
 }