<template>
    <div class="main main_rel main_account account-receipts__main" v-if="receipts.length">
        <div class="title">
            Мои чеки
        </div>
        <ul class="receipts">
            <li class="receipt" v-for="(receipt, idx) in receipts" :key="idx">
                <span class="receipt__status" :class="`receipt__status_${receipt.type}`">
                    {{ receipt.status }}
                </span>
                <img alt="" :src="receipt.image" class="receipt__image"/>
                <div class="receipt__city">
                    {{ receipt.city }}
                </div>
                <div class="receipt__date">
                    {{ receipt.date }}
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import {loadReceipts} from '/src/api/account-receipts-main';

export default {
    name: 'AccountReceiptsMain',
    data() {
        return {
            receipts: [],
        };
    },
    async created() {
        this.receipts = await loadReceipts();
    },
};
</script>

<style lang="scss">
@import "../assets/scss/_variables.scss";

.account-receipts__main {
    margin: 0 auto 23px;

    @media (max-width: $md_max) {
        margin-bottom: 20px;
    }

    .title {
        color: #ffffff;
        font-family: "PF Din Text Cond Pro", sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 48px;
        line-height: 58px;
        margin-bottom: 60px;

        @media (max-width: $md_max) {
            font-size: 36px;
            line-height: 43px;
            margin-bottom: 40px;
        }

        @media (max-width: $sm_max) {
            font-size: 24px;
            line-height: 29px;
        }
    }

    .receipts {
        display: flex;
        flex-flow: row wrap;
        justify-content: flex-start;
        align-items: flex-start;
        margin: -20px;
        padding: 0;

        @media (max-width: $md_max) {
            margin: -10px;
        }

        .receipt {
            padding: 0;
            display: block;
            overflow: hidden;
            position: relative;
            box-sizing: border-box;
            border: 1px solid #ffffff;
            border-radius: 20px;
            color: #ffffff;
            font-family: "PF Din Text Cond Pro", sans-serif;
            font-style: normal;
            font-weight: 400;
            width: 260px;
            min-height: 314px;
            margin: 20px;

            @media (max-width: $md_max) {
                width: 220px;
                min-height: 294px;
                margin: 10px;
            }

            @media (max-width: $sm_max) {
                width: 280px;
            }

            &__status {
                position: absolute;
                top: 17px;
                left: 19px;
                border-radius: 99999px;
                box-sizing: border-box;
                text-align: center;
                font-size: 14px;
                line-height: 17px;
                padding: 7px 16px 6px;
                max-width: 100%;

                @media (max-width: $md_max) {
                    max-width: 124px;
                }

                @media (max-width: $sm_max) {
                    max-width: 100%;
                }

                &_accepted {
                    background: linear-gradient(180deg, #04bb33 0%, #00b58a 100%);
                }

                &_error {
                    background: linear-gradient(180deg, #ff9c47 0%, #e600c6 100%);
                }

                &_processing {
                    background: linear-gradient(180deg, #00a2f6 0%, #c153ff 100%);
                }
            }

            &__image {
                object-fit: cover;
                margin-bottom: 20px;
                width: 258px;
                height: 199px;

                @media (max-width: $md_max) {
                    width: 218px;
                    height: 179px;
                }

                @media (max-width: $sm_max) {
                    width: 278px;
                    height: 179px;
                }
            }

            &__city, &__date {
                font-size: 18px;
                line-height: 22px;
                margin: 0 39px 10px;
            }
        }
    }
}
</style>