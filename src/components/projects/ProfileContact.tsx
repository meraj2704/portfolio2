import Image from "next/image";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  FaWhatsappSquare,
  FaLinkedin,
  FaInstagramSquare,
} from "react-icons/fa";

const ProfileContact = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="flex justify-start items-center gap-4 ">
          <div className="w-12 h-12">
            <Image
              src={"/assets/merajImg.JPG"}
              width={48}
              height={48}
              alt="meraj image"
              className="rounded-full w-full h-full scale-x-[-1] cursor-pointer"
            />
          </div>
          <div className="flex flex-col items-start justify-start">
            <h1 className="cursor-pointer">Meraj Hossain</h1>
            <div className="flex gap-5 cursor-pointer">
              <p className="text-xs text-green-500">Available Now</p>
              <p className="text-xs text-green-500">Contact Now</p>
            </div>
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="pr-2">
        <DropdownMenuLabel>Contact with</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <a href="https://wa.me/+8801684088348" target="blank">
            <div className="pl-2 flex gap-2 items-center">
              <FaWhatsappSquare className="text-green-600 text-xl md:text-2xl lg:text-3xl" />{" "}
              <p>WhatsApp</p>
            </div>
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <a
            href="https://www.linkedin.com/in/meraj-hossain-6566b8231/"
            target="blank"
          >
            <div className="flex gap-2 items-center pl-2">
              <FaLinkedin className="text-blue-600 text-xl md:text-2xl lg:text-3xl" />{" "}
              <p>Linkedin</p>
            </div>
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <a href="https://www.instagram.com/miraj_h89/?hl=en" target="blank">
            <div className="flex justify-start gap-2 items-center">
              <svg width="0" height="0">
                <linearGradient
                  id="instagramGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop
                    offset="0%"
                    style={{ stopColor: "#833ab4", stopOpacity: 1 }}
                  />
                  <stop
                    offset="50%"
                    style={{ stopColor: "#fd1d1d", stopOpacity: 1 }}
                  />
                  <stop
                    offset="100%"
                    style={{ stopColor: "#fcb045", stopOpacity: 1 }}
                  />
                </linearGradient>
              </svg>
              <FaInstagramSquare
                style={{ fill: "url(#instagramGradient)" }}
                className="text-xl md:text-2xl lg:text-3xl"
              />{" "}
              <p>Instagram</p>
            </div>
          </a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileContact;
