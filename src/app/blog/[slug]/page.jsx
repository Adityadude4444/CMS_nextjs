import dateFormat from "@/utlis/dateformat";
import { Calendar } from "lucide-react";
import Image from "next/image";

const Singleblog = () => {
  const cat = ["vs", "fight", "comic"];
  return (
    <section>
      <div className="flex flex-col justify-center items-center gap-4 p-4">
        <Image
          src="/thumbnails/comic-fighting-cartoon-background-versus-background-illustration-free-vector.jpg"
          alt="blog image"
          width={700}
          height={250}
          className="rounded-lg"
        />
        <div>
          <div className="flex gap-2 items-center">
            <Calendar className="text-gray-400 size-4" />
            <p className="text-gray-400">
              Created on : {dateFormat(new Date())}
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <p>Category :</p>
            <div className="flex gap-2">
              {cat.map((cat, index) => {
                return (
                  <p
                    key={index}
                    className="badge border border-gray-600 bg-gray-600/30 w-fit px-2 py-1 rounded-sm"
                  >
                    {cat}
                  </p>
                );
              })}
            </div>
          </div>
          <p className="p-3">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum autem
            obcaecati fugiat a! Laudantium voluptas asperiores voluptates
            placeat dolore deserunt vel necessitatibus quae nihil nulla rem
            voluptatibus neque molestiae, fugiat eaque assumenda ipsa. Illo,
            error voluptatum veritatis perspiciatis quas autem tempora, deserunt
            inventore fuga dolor aperiam ad reprehenderit repellat similique!
            Dicta eligendi architecto libero incidunt laborum dolorem asperiores
            voluptatibus eveniet nihil quidem pariatur quam magnam fuga nisi
            repellendus et minus corporis, accusantium possimus fugiat eos,
            impedit iste rem praesentium. Dolores eum, aperiam distinctio a sunt
            nesciunt voluptatem doloribus minima labore voluptatibus natus
            assumenda praesentium illum magni eaque deleniti accusamus suscipit,
            harum optio consequuntur dolorem libero, eligendi voluptates
            sapiente! Ducimus praesentium consectetur molestiae ipsum! Nihil
            dolor veniam porro, cumque mollitia est consectetur assumenda quos
            provident recusandae? Dolor neque sequi deserunt ex tempore
            provident magnam, ratione sapiente tempora, doloribus autem quia
            ipsam dignissimos atque quod laborum velit, nulla recusandae
            consectetur quo. Voluptate, libero velit atque iusto perferendis sed
            quasi pariatur neque quisquam. Obcaecati ex quod repellendus ipsum
            fuga pariatur excepturi nihil architecto? Expedita at ab provident
            doloribus unde reprehenderit, asperiores harum molestiae fugit cum
            ipsum recusandae nam ad neque! Aperiam adipisci quo perspiciatis
            suscipit, commodi, laborum vel fuga similique nihil ut totam?
          </p>
        </div>
      </div>
    </section>
  );
};
export default Singleblog;
