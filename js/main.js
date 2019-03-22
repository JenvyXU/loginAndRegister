function $(selector){
  return document.querySelector(selector)
}

//事件委托
$('.flip-modal').addEventListener('click',function(e){
  e.stopPropagation()//阻止事件冒泡，防止事件传到document里面，触发点击事件，把对话框隐藏起来
  if(e.target.classList.contains('login')){
    $('.flip-modal').classList.remove('register')
    $('.flip-modal').classList.add('login')
  }
  if(e.target.classList.contains('register')){
    $('.flip-modal').classList.remove('login')
    $('.flip-modal').classList.add('register')  
  }
  if(e.target.classList.contains('close')){
    console.log(1)
    $('.flip-modal').style.display='none'
  }
})
//点击对话框以外的位置可以关闭对话框
document.addEventListener('click',function(){
  $('.flip-modal').style.display='none'
})


$('header .login').onclick=function(e){
  e.stopPropagation()//阻止事件想document传播，如果传到document，那么会触发document的点击事件
  $('.flip-modal').style.display='block'
}

$('.modal-login form').addEventListener('submit',function(e){
  e.preventDefault()
  if(!/^\w{3,8}$/.test($('.modal-login input[name=username]').value)){
    $('.modal-login .errormsg').innerText='用户名输入3-8个字符，包括字母数字和下划线'
    return false
  }
  if(!/^\w{6,10}$/.test($('.modal-login input[name=password]').value)){
    $('.modal-login .errormsg').innerText='密码输入6-10个字符，包括字母数字和下划线'
    return false
  }
  this.submit()
})

$('.modal-register form').addEventListener('submit',function(e){
  e.preventDefault()
  if(!/^\w{3,8}$/.test($('.modal-register input[name=username]').value)){
    $('.modal-register .errormsg').innerText='用户名输入3-8个字符，包括字母数字和下划线'
    return false
  }
  if(/^lazy21$/.test($('.modal-register input[name=username]').value)){
    $('.modal-register .errormsg').innerText='用户名已存在'
    return false
  }
  if(!/^\w{6,10}$/.test($('.modal-register input[name=password]').value)){
    $('.modal-register .errormsg').innerText='密码输入6-10个字符，包括字母数字和下划线'
    return false
  }
  if($('.modal-register input[name=password]').value!==$('.modal-register input[name=password2]').value){
    $('.modal-register .errormsg').innerText='两次输入的密码不一致'
    return false    
  }

  this.submit()
})
