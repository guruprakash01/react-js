import React from 'react'

function card({ username = "guru", post = "Not assigned yet" }) {
    //console.log(props);
    return (
        <div>
            <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
                <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://images.thequint.com/thequint%2F2024-02%2F874187f8-0e4e-41f6-8335-700f4a4b15c9%2FWhatsApp_Image_2024_02_02_at_2_23_23_PM.jpeg" alt="" width="384" height="512" />
                <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                    <blockquote>
                        <p className="text-lg font-medium">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum dolorum explicabo et nam voluptates, animi, blanditiis vel qui exercitationem eligendi odit quod tempore itaque vitae delectus aliquam soluta minus ducimus.
                        </p>
                    </blockquote>
                    <figcaption className="font">
                        <div className="text-sky-500 dark:text-sky-400">
                            {username}
                        </div>
                        <div className="text-slate-700 dark:text-slate-500">
                            {post}
                        </div>
                    </figcaption>
                </div>
            </figure>
        </div>
    )
}

export default card