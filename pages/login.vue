<template>
    <div class="bg-container">
      <section>
            <div class="card">
                <div class="logo">
                    <img src="/pictures/logo.png" style=" width: 300px; display: flex;
    margin: 0 auto;">
                </div>
  
                <div class="container-form">
                    <form action="">
                      <div>
                        <label for="email" class="font-semibold">
                          ชื่อผู้ใช้ (เลขบัตรประชาชน)
                        </label>
                        <input class="flex p-3.5 my-2 mx-auto w-full rounded-lg" type="text" placeholder="Enter Email" name="email" id="email" required>
                      </div>

                      <div>
                        <label for="password" class="font-semibold">
                          รหัสผ่าน (Password)
                        </label>
                        <input class="flex p-3.5 my-2 mx-auto w-full rounded-lg" type="password" placeholder="Enter Password" name="password" id="password" required>
                      </div>
                        <a href="/vhvmanage"><p class="pw">ลืมรหัสผ่าน?</p></a>
                        <button type ="submit" class="btn"><a href="/vhvmanage">เข้าสู่ระบบ</a></button>
  
                        <a class="reg" href="/register">ลงทะเบียนผู้ใช้ใหม่</a>
                    </form>
                </div>
  
            </div>
  
        </section>
    </div>
  </template>
  
  <style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap');
  
  
  .bg-container {
    /* background: url('~/assets/image/bg-main.png') no-repeat; */
    background: url('/pictures/Login.jpg'), lightgray 50% / cover no-repeat;
    /* Set rules to fill background */
    min-height: 100%;
    min-width: 1024px;
  
    /* Set up proportionate scaling */
    width: 100%;
    height: auto;
  
    /* Set up positioning */
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  }
  
  
  p {
    color: #111f46;
    font-size: 14px;
    font-style: normal;
    font-weight: 1rem;
    text-align: right;
    font-family: Poppins;
  }
  
  
  .reg {
    display: flex;
    justify-content: center; /* จัดเนื้อหาในแนวนอน */
    align-items: center; /* จัดเนื้อหาในแนวตั้ง */
    color: #111f46;
    font-family: Poppins;
    margin: auto;
    text-align: center;
  }
  
  
  .btn {
    width: 727.732px;
    height: 50px;
    flex-shrink: 0;
    border-radius: 10px;
    background: #1F3F99;
    align-items: center;
    margin: .5rem auto;
    font-size: 20px;
    color: #FFF;
    font-family: Poppins;
    font-style: normal;
    line-height: normal;
  
  }
  
  .card {
    height: 600px;
    width: 800px;
    background-color: rgba(135, 135, 135, 0.176);
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    border-radius: 10px;
    backdrop-filter: blur(10px);
    border: 2px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
    padding: 50px 35px;
  
  }
  
  /* filter: blur(2px); */
  
  .sign {
    width: 30%;
    background-color: #1F3F99;
    border: none;
    font-weight: 700;
    margin: 20px;
    color: #FFF;
    text-align: center;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .signin {
    width: 30%;
    font-weight: 700;
    margin: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
 
  /* .login-info {
    margin: 67px;
    text-align: center;
  
    justify-content: center;
    /* border: 1px solid grey; */
  </style>
  <script>
  export default {
    name: 'login',
  }
  </script>
  