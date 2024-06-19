<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" />
    <div class="page">
        <div class="sidebar">
            <img src="/pictures/logotab.png" alt="logotab" />

            <div class="sidebar-item">
                <div class="sidebar-icon">
                    <i class="fa-solid fa-chart-pie"></i>
                </div>
                <a href="#" class="act">
                    <p>หน้าหลัก</p>
                </a>
            </div>

            <div class="sidebar-item">
                <div class="sidebar-icon">
                    <i class="fa-solid fa-circle-info"></i>
                </div>
                <a href="#">
                    <p>จัดการข้อมูลผู้ป่วย</p>
                </a>
            </div>

            <div class="sidebar-item siderbar-item-active">
                <div class="sidebar-icon">
                    <i class="fa-solid fa-people-group" style="color: #ffff;"></i>
                </div>
                <a href="#">
                    <p style="color: white;">สถานะการติดตาม</p>
                </a>
            </div>

            <div class="sidebar-item ">
                <div class="sidebar-icon">
                    <i class="fa-solid fa-chart-line" ></i>
                </div>
                <a href="index">
                    <p>จัดการข้อมูลเจ้าหน้าที่ฯลฯ</p>
                </a>
            </div>

            <div class="sidebar-item">
                <div class="sidebar-icon">
                    <i class="fa-solid fa-right-from-bracket"></i>
                </div>
                <a href="#">
                    <p>ออกจากระบบ</p>
                </a>
            </div>
        </div>
        <div class="pateint-profile">
            <h3 class="pateint-profile-header"style="color:#3671CA;">โปรไฟล์ผู้ป่วย</h3>
            <img src="C:\Users\rilra\OneDrive\เดสก์ท็อป\Chira Care\Chiracare\pictures\profile.jpg" alt="profile">
            <p class="data-pateint-name">ชื่อ:ROSÉ</p>
            <p class="data-pateint">อายุ:</p>
            <p class="data-pateint">สถานะปัจจุบัน:</p>
            <p class="data-pateint">ประเภทโรค:</p>
            <p class="data-pateint">กลุ่มผู้ป่วย:</p>
            <p class="data-pateint">ประเภทผู้ป่วย:</p>
            <p class="data-pateint">เลขบัตรประจำตัวประชาชน:</p>
            <p class="data-pateint">วันเกิด:</p>
            <p class="data-pateint">เบอร์โทรศัพท์:</p>
            <p class="data-pateint">เบอร์ฉุกเฉิน:</p>
            <p class="data-pateint">ที่อยู่:</p>
            <p class="data-pateint">ข้อมูลเพิ่มเติม:</p>
        </div>
        <div class="followup-info">
            <h3 class="followup-info-header" style="color:#3671CA;">ข้อมูลการติดตามล่าสุด</h3>
            <p class="data-follow">โรคของผู้ป่วยที่ติดตาม:</p>
            <p class="data-follow">อาการทั่วไป:</p>
            <p class="data-follow">ค่าสัญญาชีพ:</p>
            <p class="data-follow">ค่าระดับน้ำตาลในเลือด :</p>
            <p class="data-follow">วันที่เริ่มติดตาม:</p>
            <p class="data-follow">วันที่สิ้นสุด:</p>
            <p class="data-follow">ครั้งที่ติดตาม:</p>
            <p class="data-follow">เจ้าหน้าที่ที่รับผิดชอบ:</p>
            <p class="data-follow">สถานะการติดตาม:</p>
        </div>
        <div class="treatment-info">
            <h3 class="treatment-info-header" style="color:#CA3636;">ข้อมูลการรักษา</h3>
            <p class="data-treatment">โรคของผู้ป่วยที่รักษา:</p>
            <p class="data-treatment">อาการทั่วไป:</p>
            <p class="data-treatment">ประเด็นการรักษา:</p>
            <p class="data-treatment">วันที่นัดหมาย:</p>
            <p class="data-treatment">วันที่เข้ารับการรักษา:</p>
            <p class="data-treatment">วันที่นัดครั้งถัดไป:</p>
            <p class="data-treatment">ครั้งที่รักษา:</p>
            <p class="data-treatment">เจ้าหน้าที่ที่รับผิดชอบ:</p>
            <p class="data-treatment">สถานะการรักษา:</p>
        </div>
            <button class="arrow-button" style="display:flex; justify-content: center; align-items: center; width: 100px; height: 30px; font-size: 12px; margin-top: 360px; margin-right:30px;">
              <span>ดูทั้งหมด</span>
              <i class="fas fa-arrow-right" style="margin:3px; "></i>
            </button>         
        <div class="followup-history">
            <h3 class="followup-history-header" style="color:#3671CA;">ประวัติการติดตาม</h3>
            <select id="selection" style="width: 100px; height: 30px; margin-left: 325px; color:#C6C6C6;">
                <option value="option1" style="color:black;">OPD</option>
                <option value="option2"style="color:black">VHV</option>
              </select>
        </div>
</div>
        
    
        
</template>

<script>
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@500&family=Mali:wght@700&family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Noto Sans", sans-serif;
}

/* .top-bar {
    background-color: #5D97EF;
    display: flex;
    align-items: center;
} */


h1 {
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-style: normal;
    font-size: 30px;
    padding: 10px;
}

.page {
    width: 100%;
    height: 100vh;
    background-color: rgb(255, 255, 255);
    display: flex;
    color: #151D48;
}

.sidebar {
    width: 25%;
    padding: 15px;
}

.content {
    width: 100%;
    background-color: #5D97EF;
    border: 2px solid black;
}


.sidebar-item {
    display: flex;
    align-items: center;
    margin: 20px 0;
    color: #808191;
}

.sidebar-icon {
    width: 45px;
    height: 45px;
    color: #808191;
    /* background-color: #353540; */
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    margin-right: 20px;
}

.siderbar-item-active {
    color: #737791;
}

.siderbar-item-active {
    background-color: #5D97EF;
    color: #ffff;
    border-radius: 10px;
}

.fa-chart-pie {
    color: #737791;
}

.sidebar-item a {
    text-decoration: none;
    color: #737791;
}

.sidebar-item .act {
    text-decoration: none;
    color: #737791;
}

.fa-solid {
    font-size: 1.5rem;
}

.hr {
    width: 100%;
    height: 1px;
    background-color: #393846;
}
.pateint-profile {
    display: flex;
    flex-direction: column;
    border: 1px solid #ffffff;
    padding: 15px;
    margin: 10px;
    width: 300px;
}
.pateint-profile-header{
    font-weight: bold;
    margin-bottom: 20px;
    text-align: center;
}
.data-pateint-name {
    color: #000000;
    margin-top: 10px;
    margin-bottom: 5px;
    text-align: center;
}

.data-pateint {
    color: #000000;
    margin-bottom: 5px;
}
.followup-info {
    display: flex;
    flex-direction: column;
    background-color: #e4eefd;
    border-radius: 10px;
    padding: 15px;
    margin: 10px;
    width: 300px;
    height: 330px;
}
.followup-info-header{
    font-weight: bold;
    margin-bottom: 20px;
    text-align: center;
}
.data-follow {
    color: #000000;
    margin-bottom: 5px;
}
.treatment-info{
    display: flex;
    flex-direction: column;
    background-color: #fce0e0;
    border-radius: 10px;
    padding: 15px;
    margin: 10px;
    width: 300px;
    height: 330px;
    right: 10px;
}
.treatment-info-header{
    font-weight: bold;
    margin-bottom: 20px;
    text-align: center;

}
.data-treatment{
    color: #000000;
    margin-bottom: 5px;
}
.followup-history{
    display: flex;
    flex-direction: row;
    position: absolute;
    top: 400px;
    right: 50px;
    background-color: #f0eeee;
    border-radius: 10px;
    padding: 15px;
    margin: 10px;
    width: 620px;
    height: 300px;
}
.followup-history-header{
    font-weight: bold;
    margin-bottom: 20px;
    text-align: center;
}
.data-followup-history{
    color: #000000;
    margin-bottom: 5px;
}
.selection{
    top: 400px;
    right: 50px;
    background-color: #c9c4c4;
    border-radius: 10px;
    padding: 15px;
    margin: 10px;
    width: 620px;
    height: 300px;
}
</style>