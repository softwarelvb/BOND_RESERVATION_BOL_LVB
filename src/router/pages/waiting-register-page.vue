<script>
import moment from 'moment';

export default {
    data() {
        return {
            // endTime: moment().set({hour: 8, minute: 0, second: 0, millisecond: 0}),
            endTime: moment().set({hour: 8, minute: 0, second: 0, millisecond: 0}),
            formattedTime: {
                hours: '00',
                minutes: '00',
                seconds: '00'
            },
            timer: null
        };
    },
    mounted() {
        this.startTimer();
    },
    beforeEnter(to, from, next) {
        const currentTime = moment();
        // const start = moment().set({hour: 8, minute: 0, second: 0, millisecond: 0});
        // const end = moment().set({hour: 16, minute: 30, second: 0, millisecond: 0});
        const start = moment().set({hour: 1, minute: 0, second: 0, millisecond: 0});
        const end = moment().set({hour: 23, minute: 30, second: 0, millisecond: 0});
        if (to.name !== 'Index-1' && currentTime.isBetween(start, end)) {
            next({name: 'Index-1'});
        } else {
            next();
        }
    },
    methods: {
        startTimer() {
            this.timer = setInterval(() => {
                const currentTime = moment();
                const end = moment().set({hour: 23, minute: 21, second: 0, millisecond: 0});
                // const end = moment().set({hour: 16, minute: 30, second: 0, millisecond: 0});
                let duration;
                if (currentTime.isAfter(end)) {
                    // Add 1 day to endTime
                    this.endTime.add(4, 'day');
                    duration = moment.duration(this.endTime.diff(moment()));
                } else {
                    duration = moment.duration(this.endTime.diff(moment()));
                    if (duration.asSeconds() <= 0) {
                        clearInterval(this.timer);
                    }
                }
                this.formattedTime.hours = duration.hours().toString().padStart(2, '0');
                this.formattedTime.minutes = duration.minutes().toString().padStart(2, '0');
                this.formattedTime.seconds = duration.seconds().toString().padStart(2, '0');
            }, 1000);
        }
    }
};
</script>


<template>
    <div>
        <div class="container counter-timer p-3">
                <b-card class="shadow-sm rounded-top"  style="background: linear-gradient(to right, #E1F5FE, #FAFAFA);">
                    <b-row class="justify-content-md-center">
                        <b-col class="text-center">
                            <img
                               src="@/assets/images/Logo-LVB-HD.png"
                               style="width: 200px"
                               class="mb-2 mt-2"
                            />
                            <h4 class="pt-2 text-danger" style="font-weight: bold">
                                ໝາຍເຫດ: ໝົດເວລາການລົງທະບຽນໃນມື້ນີ້ແລ້ວ</h4>
                            <h4 class="pt-2 pb-2" style="font-weight: normal">ທລວ ຈະເປີດໃຫ້ສັ່ງຈອງຊື້ພັນທະບັດ ໃນອີກ</h4>
                        </b-col>
                    </b-row>
                    <div class="row justify-content-center">
                        <div class="col-3 col-md-2 time-block">
                            <span class="time">{{ formattedTime.hours }}</span>
                            <span class="label">ຊົ່ວໂມງ</span>
                        </div>
                        <div class="col-3 col-md-2 time-block">
                            <span class="time">{{ formattedTime.minutes }}</span>
                            <span class="label">ນາທີ</span>
                        </div>
                        <div class="col-3 col-md-2 time-block">
                            <span class="time">{{ formattedTime.seconds }}</span>
                            <span class="label">ວິນາທີ</span>
                        </div>
                        <div class="end-time text-center">
                            <h4 style="font-weight: normal">ລະບົບຈະເປີດໃຫ້ລົງທະບຽນ ໃນເວລາລັດຖະການເທົ່ານັ້ນ ເລີ່ມແຕ່ ເວລາ <b>8:00 </b> ເຖິງເວລາ
                                <b>16:30 </b>
                                ຂອງວັນທີ
                                <b>15-17/05/2023</b></h4>
                        </div>
                    </div>
                </b-card>
        </div>
    </div>
</template>
<style>
.counter-timer {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.time-block {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 0px;
}

.time {
    font-size: 5rem;
}

.label {
    font-size: 1.5rem;
    text-transform: uppercase;
}

.end-time {
    margin-top: 20px;
}

@media screen and (max-width: 768px) {
    /* styles for screens smaller than 768px */
    .time {
        font-size: 3rem;
    }

    .label {
        font-size: 1rem;
    }
}

@media screen and (max-width: 576px) {
    /* styles for screens smaller than 576px */
    .time {
        font-size: 2rem;
    }

    .label {
        font-size: 0.8rem;
    }
}
</style>




<!--<style>-->
<!--.counter-timer {-->
<!--    height: 100vh;-->
<!--    display: flex;-->
<!--    justify-content: center;-->
<!--    align-items: center;-->
<!--}-->

<!--.time-block {-->
<!--    display: flex;-->
<!--    flex-direction: column;-->
<!--    align-items: center;-->
<!--    margin: 0 10px;-->
<!--}-->

<!--.time {-->
<!--    font-size: 5rem;-->
<!--}-->

<!--.label {-->
<!--    font-size: 1.5rem;-->
<!--    text-transform: uppercase;-->
<!--}-->

<!--.end-time {-->
<!--    margin-top: 20px;-->
<!--}-->
<!--</style>-->


<!--<template>-->
<!--    <div>-->
<!--        <b-row align-v="center">-->
<!--            <b-col>-->
<!--                <div class="container counter-timer">-->
<!--                    <h3 class="text-center">ລະບົບຈະເປີດໃຫ້ລົງທະບຽນສັ່ງຈອງຊື້ພັນທະບັດ ອີກຄັ້ງ</h3>-->
<!--                    <div class="row justify-content-center">-->
<!--                        <div class="col-3 col-md-2 time-block">-->
<!--                            <span class="time">{{ formattedTime.hours }}</span>-->
<!--                            <span class="label">ຊົ່ວໂມງ</span>-->
<!--                        </div>-->
<!--                        <div class="col-3 col-md-2 time-block">-->
<!--                            <span class="time">{{ formattedTime.minutes }}</span>-->
<!--                            <span class="label">ນາທີ</span>-->
<!--                        </div>-->
<!--                        <div class="col-3 col-md-2 time-block">-->
<!--                            <span class="time">{{ formattedTime.seconds }}</span>-->
<!--                            <span class="label">ວິນາທີ</span>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    <div class="end-time text-center">-->
<!--                        <p>ລະບົບຈະເປີດໃຫ້ລົງທະບຽນ ໃນເວລາລັດຖະການເທົ່ານັ້ນ ເລີ່ມແຕ່ ເວລາ 8:00 ເຖິງເວລາ 16:30 ຂອງວັນທີ-->
<!--                            15-17/05/2022</p>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </b-col>-->
<!--        </b-row>-->
<!--    </div>-->
<!--</template>-->

<!--<style>-->
<!--.counter-timer {-->
<!--    height: 100vh;-->
<!--}-->

<!--.time-block {-->
<!--    display: flex;-->
<!--    flex-direction: column;-->
<!--    align-items: center;-->
<!--    margin: 0 10px;-->
<!--}-->

<!--.time {-->
<!--    font-size: 5rem;-->
<!--}-->

<!--.label {-->
<!--    font-size: 1.5rem;-->
<!--    text-transform: uppercase;-->
<!--}-->

<!--.end-time {-->
<!--    margin-top: 20px;-->
<!--}-->
<!--</style>-->

<!--<template>-->
<!--    <div class="counter-timer">-->
<!--        <h1>Countdown Timer</h1>-->
<!--        <div class="timer">-->
<!--            <div class="time-block">-->
<!--                <span class="time">{{ formattedTime.hours }}</span>-->
<!--                <span class="label">Hours</span>-->
<!--            </div>-->
<!--            <div class="time-block">-->
<!--                <span class="time">{{ formattedTime.minutes }}</span>-->
<!--                <span class="label">Minutes</span>-->
<!--            </div>-->
<!--            <div class="time-block">-->
<!--                <span class="time">{{ formattedTime.seconds }}</span>-->
<!--                <span class="label">Seconds</span>-->
<!--            </div>-->
<!--        </div>-->
<!--        <div class="end-time">-->
<!--            <p>End Time: {{ endTime.format('h:mm A') }}</p>-->
<!--        </div>-->
<!--    </div>-->
<!--</template>-->


<!--<style>-->
<!--.counter-timer {-->
<!--    display: flex;-->
<!--    flex-direction: column;-->
<!--    align-items: center;-->
<!--    justify-content: center;-->
<!--    height: 100vh;-->
<!--}-->

<!--.timer {-->
<!--    display: flex;-->
<!--    justify-content: center;-->
<!--    align-items: center;-->
<!--}-->

<!--.time-block {-->
<!--    display: flex;-->
<!--    flex-direction: column;-->
<!--    align-items: center;-->
<!--    margin: 0 10px;-->
<!--}-->

<!--.time {-->
<!--    font-size: 5rem;-->
<!--}-->

<!--.label {-->
<!--    font-size: 1.5rem;-->
<!--    text-transform: uppercase;-->
<!--}-->

<!--.end-time {-->
<!--    margin-top: 20px;-->
<!--}-->
<!--</style>-->
