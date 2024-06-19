<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" />
    <div class="page h-lvh w-full bg-white flex text-bluetext">
        <div class="sidebar w-1/4 p-3.5">
            <img src="/pictures/logotab.png" alt="logotab" />

            <div class="items-center my-5 flex flex-wrap" >
                <div class="sidebar-icon w-11 h-11 items-center justify-center text-gray mr-5 rounded-xl flex flex-wrap" >
                    <i class="fa-solid fa-chart-pie text-2xl"></i>
                </div>
                <a href="#" class="act no-underline">
                    <p class="text-gray flex">หน้าหลัก</p>
                </a>
            </div>

            <div class="items-center my-5 flex flex-wrap">
                <div class="sidebar-icon w-11 h-11 items-center justify-center text-gray mr-5 rounded-xl flex flex-wrap">
                    <i class="fa-solid fa-circle-info text-2xl"></i>
                </div>
                <a href="#" class="no-underline">
                    <p class="text-gray">จัดการข้อมูลผู้ป่วย</p>
                </a>
            </div>

            <div class="items-center my-5 flex flex-wrap">
                <div class="sidebar-icon w-11 h-11 items-center justify-center text-gray mr-5 rounded-xl flex flex-wrap">
                    <i class="fa-solid fa-chart-line text-2xl"></i>
                </div>
                <a href="#" class="no-underline">
                    <p class="text-gray">สถานะการติดตาม</p>
                </a>
            </div>

            <div class="siderbar-item-active items-center my-5 bg-bluesky rounded-lg flex flex-wrap" >
                <div class="sidebar-icon w-11 h-11 items-center justify-center text-gray mr-5 rounded-xl flex flex-wrap"
                    >
                    <i class="fa-solid fa-people-group text-2xl" style="color: white;"></i>
                </div>
                <a href="#" class="no-underline">
                    <p class="text-white">จัดการข้อมูลเจ้าหน้าที่ฯลฯ</p>
                </a>
            </div>

            <div class="items-center my-5 flex flex-wrap">
                <div class="sidebar-icon w-11 h-11 items-center justify-center text-gray mr-5 rounded-xl flex flex-wrap">
                    <i class="fa-solid fa-right-from-bracket text-2xl"></i>
                </div>
                <a href="/login" class="no-underline">
                    <p class="text-gray">ออกจากระบบ</p>
                </a>
            </div>

            <div class="hr w-full h-px bg-black"></div>
        </div>
        <div class="content w-full">
            <!-- Top Bar -->
            <div class="flex items-center justify-between">
                <div class="top-bar-header">
                    <h1 class="font-Poppins font-semibold not-italic text-3xl p-2.5 ">
                        จัดการข้อมูลเจ้าหน้าที่ติดตามผู้ป่วย</h1>
                </div>
                <!-- Nav bar -->
                <div class = "flex flex-wrap items-center" style="margin: 0 10px">
                    <i class="fa-regular fa-bell"
                        style="color: black; margin: 0 8px; padding: 8px; border-radius: 5px; background-color: #e5e7eb"></i>
                    <img style="width: 35px; height: 35px; margin: 0 5px; border-radius: 10px;"
                        src="https://scontent.fcnx4-1.fna.fbcdn.net/v/t39.30808-6/340812573_1222119048693459_7878843100786500839_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=b9yduR4LQ9kQ7kNvgGaKCrb&_nc_ht=scontent.fcnx4-1.fna&oh=00_AYDRLmFq01Xm3Kk-IHJEmezeU7fczDbwG1Czn6OgCs2UYA&oe=667260C2"
                        alt="">
                    <p style="font-size: 10px; font-weight: 600; color: black;">Kanlayanee</p>
                </div>
            </div>
            <!-- Search bar-->
            <div class="container-bar flex flex-wrap m-7">
                <div class="pr-3">
                    <h3 class="text-black">ค้นหารายชื่อ</h3>
                    <input type="search"
                        class="block p-2.5 w-64 z-20 text-sm rounded-xl border-2 border-slate-300"
                        placeholder="ค้นหาที่นี่..." required />
                </div>

                <div class="pr-3">
                    <h3 class="text-black">เขตที่รับผิดชอบ</h3>
                    <input type="search"
                        class="block p-2.5 w-64 z-20 text-sm rounded-xl border-2 border-slate-300"
                        placeholder="ค้นหา" required />
                </div>

                <div class="pr-3">
                    <h3 class="text-black">เลขบัตรประชาชน</h3>
                    <input type="search"
                        class="block p-2.5 w-64 z-20 text-sm rounded-xl border-2 border-slate-300"
                        placeholder="ค้นหา" required />
                </div>

                <div class="pr-3">
                    <h3 class="text-black">เบอร์โทรศัพท์ฉุกเฉิน</h3>
                    <input type="search"
                        class="block p-2.5 w-64 z-20 text-sm rounded-xl border-2 border-slate-300"
                        placeholder="ค้นหา" required />
                </div>

                <div class="pr-3 ">
                    <h3 class="text-black">สถานะผู้ป่วย</h3>
                    <select name="cars" class="p-2.5 w-64 z-20 text-sm rounded-xl border-2 border-slate-300 text-black"
                    placeholder="ทั้งหมด" required >
                        <option value="ทั้งหมด">ทั้งหมด</option>
                        <option value="กำลังติดตาม">กำลังติดตาม</option>
                        <option value="ติดตามแล้ว">ติดตามแล้ว</option>
                    </select>
                </div>
            </div>
            <!-- Search bar-->
        </div>
    </div>

</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@500&family=Mali:wght@700&family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Noto Sans", sans-serif;
}
</style>

<script>

</script>