import React from 'react';
import { useState } from 'react';
import s from './Burger.module.scss';
import Menu from './menu/Menu';


// ссылка на видео https://www.youtube.com/watch?v=N0LWLkaJz1I&list=PLIYZ3iUMDY_eGffTJSUu9ML55CDDVtnTJ&index=12&t=646s


const Burger = () => {

    const [menuActive, setMenuActive] = useState(false)

    // const items = [{ value: "Главная", href: "/main", icon: "Done" },
    //              { value: "Услуги", href: "/service", icon: "Info" },
    //              { value: "Магазин", href: "/shop", icon: "android" }]

    const items = [{value:"Главная",href:"/main"}, 
                    {value:"Услуги",href:"/service"}, 
                    {value:"Магазин",href:"/shop"}]

    return (
        <div className={s.wrapper}>
        <div className={s.burger}>
            <nav>
                <div className={s.burgerBtn} onClick={() => setMenuActive(!menuActive)}>
                    <span />
                </div>
            </nav>
            <main>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, delectus illum! Id voluptas laborum optio earum illo beatae veniam et nesciunt, tempore sint ratione quas! Nam harum amet rerum eveniet?
                    Ipsam, quibusdam aliquam vel esse, provident, recusandae non deserunt eaque perspiciatis a unde asperiores perferendis ratione labore dolore. Dolorum, nobis. Asperiores voluptatem optio hic inventore pariatur, facilis iusto soluta reiciendis?
                    Enim fugiat accusamus rem maiores ullam voluptatibus doloremque vero possimus voluptates corrupti itaque accusantium voluptate quae alias veritatis aperiam sint reprehenderit nemo ea nesciunt, quod vel eos optio? Perspiciatis, recusandae.
                    Laborum, sed tempora placeat beatae ut itaque aperiam facilis, consectetur facere quaerat ex quasi suscipit mollitia libero aspernatur nulla quisquam ducimus totam saepe accusantium. Velit numquam ullam autem. Quis, officiis?
                    At quis sequi delectus id quae fuga velit laudantium eligendi et quidem modi placeat officiis quibusdam reiciendis, est, mollitia explicabo dolores iste. Repellendus quaerat distinctio, repudiandae molestiae ea cumque sapiente.
                    Doloremque perferendis doloribus quae repudiandae omnis dicta cupiditate totam neque atque. Quam eaque consectetur minima, itaque vitae officiis suscipit, dignissimos sapiente sint numquam delectus error, praesentium mollitia eveniet laboriosam at.
                    Ipsam voluptatibus non sapiente accusantium quis explicabo quod ut a iste eius at placeat assumenda consectetur, corrupti repudiandae aliquam nesciunt, neque dignissimos, in impedit fugit eaque harum doloremque alias? Deserunt.
                    Tempore eaque deleniti consectetur facere repudiandae. Optio voluptate et at totam dolore sapiente illum porro ut rerum ullam, error, quod vero, odit ipsum minus laudantium labore animi deleniti quibusdam quam.
                    At nesciunt quam quae rem doloremque quod, quidem alias id numquam saepe sint culpa laboriosam quibusdam inventore ea tempora dolorem! At iusto odio eaque nam sit quisquam tenetur? Officiis, placeat.
                    Vero atque adipisci voluptate dolor similique molestias! Dolorem, necessitatibus molestiae nostrum aut qui commodi voluptatum! Pariatur assumenda corrupti tempore optio perspiciatis nam voluptas aperiam animi mollitia voluptatibus, labore unde quo.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, delectus illum! Id voluptas laborum optio earum illo beatae veniam et nesciunt, tempore sint ratione quas! Nam harum amet rerum eveniet?
                    Ipsam, quibusdam aliquam vel esse, provident, recusandae non deserunt eaque perspiciatis a unde asperiores perferendis ratione labore dolore. Dolorum, nobis. Asperiores voluptatem optio hic inventore pariatur, facilis iusto soluta reiciendis?
                    Enim fugiat accusamus rem maiores ullam voluptatibus doloremque vero possimus voluptates corrupti itaque accusantium voluptate quae alias veritatis aperiam sint reprehenderit nemo ea nesciunt, quod vel eos optio? Perspiciatis, recusandae.
                    Laborum, sed tempora placeat beatae ut itaque aperiam facilis, consectetur facere quaerat ex quasi suscipit mollitia libero aspernatur nulla quisquam ducimus totam saepe accusantium. Velit numquam ullam autem. Quis, officiis?
                    At quis sequi delectus id quae fuga velit laudantium eligendi et quidem modi placeat officiis quibusdam reiciendis, est, mollitia explicabo dolores iste. Repellendus quaerat distinctio, repudiandae molestiae ea cumque sapiente.
                    Doloremque perferendis doloribus quae repudiandae omnis dicta cupiditate totam neque atque. Quam eaque consectetur minima, itaque vitae officiis suscipit, dignissimos sapiente sint numquam delectus error, praesentium mollitia eveniet laboriosam at.
                    Ipsam voluptatibus non sapiente accusantium quis explicabo quod ut a iste eius at placeat assumenda consectetur, corrupti repudiandae aliquam nesciunt, neque dignissimos, in impedit fugit eaque harum doloremque alias? Deserunt.
                    Tempore eaque deleniti consectetur facere repudiandae. Optio voluptate et at totam dolore sapiente illum porro ut rerum ullam, error, quod vero, odit ipsum minus laudantium labore animi deleniti quibusdam quam.
                    At nesciunt quam quae rem doloremque quod, quidem alias id numquam saepe sint culpa laboriosam quibusdam inventore ea tempora dolorem! At iusto odio eaque nam sit quisquam tenetur? Officiis, placeat.
                    Vero atque adipisci voluptate dolor similique molestias! Dolorem, necessitatibus molestiae nostrum aut qui commodi voluptatum! Pariatur assumenda corrupti tempore optio perspiciatis nam voluptas aperiam animi mollitia voluptatibus, labore unde quo.</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, delectus illum! Id voluptas laborum optio earum illo beatae veniam et nesciunt, tempore sint ratione quas! Nam harum amet rerum eveniet?
                    Ipsam, quibusdam aliquam vel esse, provident, recusandae non deserunt eaque perspiciatis a unde asperiores perferendis ratione labore dolore. Dolorum, nobis. Asperiores voluptatem optio hic inventore pariatur, facilis iusto soluta reiciendis?
                    Enim fugiat accusamus rem maiores ullam voluptatibus doloremque vero possimus voluptates corrupti itaque accusantium voluptate quae alias veritatis aperiam sint reprehenderit nemo ea nesciunt, quod vel eos optio? Perspiciatis, recusandae.
                    Laborum, sed tempora placeat beatae ut itaque aperiam facilis, consectetur facere quaerat ex quasi suscipit mollitia libero aspernatur nulla quisquam ducimus totam saepe accusantium. Velit numquam ullam autem. Quis, officiis?
                    At quis sequi delectus id quae fuga velit laudantium eligendi et quidem modi placeat officiis quibusdam reiciendis, est, mollitia explicabo dolores iste. Repellendus quaerat distinctio, repudiandae molestiae ea cumque sapiente.
                    Doloremque perferendis doloribus quae repudiandae omnis dicta cupiditate totam neque atque. Quam eaque consectetur minima, itaque vitae officiis suscipit, dignissimos sapiente sint numquam delectus error, praesentium mollitia eveniet laboriosam at.
                    Ipsam voluptatibus non sapiente accusantium quis explicabo quod ut a iste eius at placeat assumenda consectetur, corrupti repudiandae aliquam nesciunt, neque dignissimos, in impedit fugit eaque harum doloremque alias? Deserunt.
                    Tempore eaque deleniti consectetur facere repudiandae. Optio voluptate et at totam dolore sapiente illum porro ut rerum ullam, error, quod vero, odit ipsum minus laudantium labore animi deleniti quibusdam quam.
                    At nesciunt quam quae rem doloremque quod, quidem alias id numquam saepe sint culpa laboriosam quibusdam inventore ea tempora dolorem! At iusto odio eaque nam sit quisquam tenetur? Officiis, placeat.
                    Vero atque adipisci voluptate dolor similique molestias! Dolorem, necessitatibus molestiae nostrum aut qui commodi voluptatum! Pariatur assumenda corrupti tempore optio perspiciatis nam voluptas aperiam animi mollitia voluptatibus, labore unde quo.</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, delectus illum! Id voluptas laborum optio earum illo beatae veniam et nesciunt, tempore sint ratione quas! Nam harum amet rerum eveniet?
                    Ipsam, quibusdam aliquam vel esse, provident, recusandae non deserunt eaque perspiciatis a unde asperiores perferendis ratione labore dolore. Dolorum, nobis. Asperiores voluptatem optio hic inventore pariatur, facilis iusto soluta reiciendis?
                    Enim fugiat accusamus rem maiores ullam voluptatibus doloremque vero possimus voluptates corrupti itaque accusantium voluptate quae alias veritatis aperiam sint reprehenderit nemo ea nesciunt, quod vel eos optio? Perspiciatis, recusandae.
                    Laborum, sed tempora placeat beatae ut itaque aperiam facilis, consectetur facere quaerat ex quasi suscipit mollitia libero aspernatur nulla quisquam ducimus totam saepe accusantium. Velit numquam ullam autem. Quis, officiis?
                    At quis sequi delectus id quae fuga velit laudantium eligendi et quidem modi placeat officiis quibusdam reiciendis, est, mollitia explicabo dolores iste. Repellendus quaerat distinctio, repudiandae molestiae ea cumque sapiente.
                    Doloremque perferendis doloribus quae repudiandae omnis dicta cupiditate totam neque atque. Quam eaque consectetur minima, itaque vitae officiis suscipit, dignissimos sapiente sint numquam delectus error, praesentium mollitia eveniet laboriosam at.
                    Ipsam voluptatibus non sapiente accusantium quis explicabo quod ut a iste eius at placeat assumenda consectetur, corrupti repudiandae aliquam nesciunt, neque dignissimos, in impedit fugit eaque harum doloremque alias? Deserunt.
                    Tempore eaque deleniti consectetur facere repudiandae. Optio voluptate et at totam dolore sapiente illum porro ut rerum ullam, error, quod vero, odit ipsum minus laudantium labore animi deleniti quibusdam quam.
                    At nesciunt quam quae rem doloremque quod, quidem alias id numquam saepe sint culpa laboriosam quibusdam inventore ea tempora dolorem! At iusto odio eaque nam sit quisquam tenetur? Officiis, placeat.
                    Vero atque adipisci voluptate dolor similique molestias! Dolorem, necessitatibus molestiae nostrum aut qui commodi voluptatum! Pariatur assumenda corrupti tempore optio perspiciatis nam voluptas aperiam animi mollitia voluptatibus, labore unde quo.</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, delectus illum! Id voluptas laborum optio earum illo beatae veniam et nesciunt, tempore sint ratione quas! Nam harum amet rerum eveniet?
                    Ipsam, quibusdam aliquam vel esse, provident, recusandae non deserunt eaque perspiciatis a unde asperiores perferendis ratione labore dolore. Dolorum, nobis. Asperiores voluptatem optio hic inventore pariatur, facilis iusto soluta reiciendis?
                    Enim fugiat accusamus rem maiores ullam voluptatibus doloremque vero possimus voluptates corrupti itaque accusantium voluptate quae alias veritatis aperiam sint reprehenderit nemo ea nesciunt, quod vel eos optio? Perspiciatis, recusandae.
                    Laborum, sed tempora placeat beatae ut itaque aperiam facilis, consectetur facere quaerat ex quasi suscipit mollitia libero aspernatur nulla quisquam ducimus totam saepe accusantium. Velit numquam ullam autem. Quis, officiis?
                    At quis sequi delectus id quae fuga velit laudantium eligendi et quidem modi placeat officiis quibusdam reiciendis, est, mollitia explicabo dolores iste. Repellendus quaerat distinctio, repudiandae molestiae ea cumque sapiente.
                    Doloremque perferendis doloribus quae repudiandae omnis dicta cupiditate totam neque atque. Quam eaque consectetur minima, itaque vitae officiis suscipit, dignissimos sapiente sint numquam delectus error, praesentium mollitia eveniet laboriosam at.
                    Ipsam voluptatibus non sapiente accusantium quis explicabo quod ut a iste eius at placeat assumenda consectetur, corrupti repudiandae aliquam nesciunt, neque dignissimos, in impedit fugit eaque harum doloremque alias? Deserunt.
                    Tempore eaque deleniti consectetur facere repudiandae. Optio voluptate et at totam dolore sapiente illum porro ut rerum ullam, error, quod vero, odit ipsum minus laudantium labore animi deleniti quibusdam quam.
                    At nesciunt quam quae rem doloremque quod, quidem alias id numquam saepe sint culpa laboriosam quibusdam inventore ea tempora dolorem! At iusto odio eaque nam sit quisquam tenetur? Officiis, placeat.
                    Vero atque adipisci voluptate dolor similique molestias! Dolorem, necessitatibus molestiae nostrum aut qui commodi voluptatum! Pariatur assumenda corrupti tempore optio perspiciatis nam voluptas aperiam animi mollitia voluptatibus, labore unde quo.</p>
            </main>
            <Menu active={menuActive} setActive={setMenuActive} header={"Бургер меню"} items={items} />
        </div>
        </div>
    );
}

export default Burger;
