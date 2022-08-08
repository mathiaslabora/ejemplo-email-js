## Creación de Formulario de contacto, en ReactJS con utilización de servicio de correo EmailJS


> EmailJS a partir de un formulario, y ciertas etiquetas dentro del mismo, va a enviarnos un correo con el contenido que ingresará un usuario el cual desea contactarse con la empresa, administradores o el dueño de esa página.


Lo que necesito: 
- Ide que utilicemos en este caso VScode
- NodeJS.
- Conocimiento básico de ReactJS y Javascript
- En node, instalar: npm install -g create-react-app  para poder crear proyectos con react.
- Correo electrónico (recibirá los correos).
- Crear cuenta en EmailJS.


- Pagina EmailJS: https://www.emailjs.com/
- Documentacion EmailJS para react: https://www.emailjs.com/docs/examples/reactjs/


</br>
</br>
</br>

> - En primer lugar, luego de tener instalado nuestro node, y el paquete para la creación de proyectos react, procedemos a crear un nuevo proyecto:

![1](https://user-images.githubusercontent.com/80761959/183432782-208d8f55-9edb-4790-9746-ff8c3e901f8a.png)
</br>

> - Una vez que tenemos el proyecto listo, limpiamos el archivo app.js, creamos directorio y archivo, en este caso form-email.jsx dentro de components, donde crearemos el formulario:


![3](https://user-images.githubusercontent.com/80761959/183433091-4da6734e-900b-4dc8-ba71-58bbf0e06fcf.png)

</br>
</br>

> - Creamos un formulario básico y utilizando bootstrap (opcional), con Nombre, Correo, y Mensaje, que serán datos que tomaremos y enviaremos por medio de EmailJS a nuestro correo.y podemos incluir los inputs que queramos para ser enviados:


![3-5](https://user-images.githubusercontent.com/80761959/183434386-06307b2d-d5b3-4a58-a090-d9f2d3dbd1f3.png)

</br>
</br>

> - El archivo completo se debería estar viendo de esta forma, recordando que cada input que coloquemos y queramos que sea incluido en el correo debemos ponerle un “name” con el cual lo identificaremos posteriormente:


![4](https://user-images.githubusercontent.com/80761959/183433486-4f6e3623-1c4d-4582-8301-8c41aa65f242.png)

</br>
</br>

> - Incluimos el componente en el app.js para poder mostrarlo:

</br>

![4-5](https://user-images.githubusercontent.com/80761959/183433545-fe298344-8e03-4db7-b181-123c2c37787b.png)

</br>
</br>

> - Ahora Procedemos a crearnos una cuenta en EmailJS:

![5](https://user-images.githubusercontent.com/80761959/183434634-af89e2ea-c157-4a19-8773-3fabc68b8a30.png)
</br>
> - Y nos logueamos:

![6](https://user-images.githubusercontent.com/80761959/183434696-42a13a0e-d90b-4e36-b7d6-12ae6953cba0.png)
</br>
</br>
> - El siguiente paso es crear el servicio, el cual lo vincularemos con el correo al que queremos que lleguen las consultas/contacto que vengan desde el sitio.

![7](https://user-images.githubusercontent.com/80761959/183434755-47789629-3419-48b9-ae67-28848f0d0ba0.png)
</br>
</br>
![8](https://user-images.githubusercontent.com/80761959/183434816-33826e3d-1c7e-4917-bf4f-dbff785d433b.png)
</br>
</br>
> - Creamos una plantilla, la cual debe tener el formato en que queremos que nos llegue la información y las etiquetas iguales a los name en el formulario:

![9](https://user-images.githubusercontent.com/80761959/183434851-8fc8f5cf-2a1e-4abc-b16c-653a1de6e2f6.png)
</br>
</br>
> - Necesitamos instalar EmailJS, en caso de no trabajar con react, leer la documentación para poder implementarlo.

![10](https://user-images.githubusercontent.com/80761959/183434898-8135c0f4-3f1e-4091-8dd4-dd8f99b14a3d.png)
</br>
</br>
> - Siguiendo con la documentación de EmailJS nos dice como crear una función la cual será la que envíe todos los datos del formulario y en la cual nos pide cuatro datos, el e.current se lo suministramos por medio del formulario al completarlo y los 3 restantes son:

![11](https://user-images.githubusercontent.com/80761959/183434939-5998960a-731d-4c66-a5fd-b1bddcc8bdae.png)
</br>
</br>
> - El service id, lo encontramos cuando creamos el servicio:

![12](https://user-images.githubusercontent.com/80761959/183435015-4755d255-4c3b-41bf-b9ab-384f3bb26056.png)
</br>
</br>
> - El template id, dentro de settings en “email templates”

![13](https://user-images.githubusercontent.com/80761959/183435100-8dbdd671-10e2-4f41-a710-3b257f8855ee.png)
</br>
</br>

> - Y el public key en general dentro de “account”

![14](https://user-images.githubusercontent.com/80761959/183435153-58e39634-8b4c-4fd6-aceb-3ba6e02a4839.png)
</br>
</br>
> - La función con los datos queda de esta forma, y en el formulario la agregamos en un onSubmit:

![15](https://user-images.githubusercontent.com/80761959/183435211-ad2f7bf1-4879-4b54-8b14-add489aef943.png)
</br>
</br>
> - El formulario nos queda así, y procedemos a enviar,  obtenemos en consola un OK confirmando que se realizó todo correctamente.

![16](https://user-images.githubusercontent.com/80761959/183435259-c0c32b6b-9207-4902-92fb-98cbd7e65a30.png)
</br>
</br>
> - Hacemos que el formulario se borre cuando se envíe correctamente: 

![17](https://user-images.githubusercontent.com/80761959/183435361-35d07413-54f8-4d40-8d65-03e8ac5574c9.png)














