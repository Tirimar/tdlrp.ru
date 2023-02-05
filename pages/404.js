import MainContainer from "../components/MainContainer";
import style from "../styles/404.module.scss"
import Head from "next/head";

export default function Error(){
    return (
      <MainContainer>
          <Head>
              <title>Упс...</title>
              <meta name="viewport" content="width=1600"/>
          </Head>
          <div className={style.error}>
              <div className={style.error_block}>
                  <span className={style.title}>404</span>
                  <span className={style.wrong}>Кажется, что-то пошло не так</span>
                  <span className={style.wrong}>(－ω－) zzZ</span>
              </div>
          </div>
      </MainContainer>
    );
}