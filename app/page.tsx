/**
 * v0 by Vercel.
 * @see https://v0.dev/t/WAc10D3st7S
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { SlArrowLeft } from "react-icons/sl";
import { FaRegBell } from "react-icons/fa6";
import { SlArrowDown } from "react-icons/sl";
import Image from "next/image";

import avatIcone from "@/public/images/avatar.png";
import { FiEdit3, FiTrash2 } from "react-icons/fi";

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

export default function Component() {
  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-gray-100 p-4 max-h-full flex flex-col">
        <div className="flex items-center h-[10vh]">
          <div className="flex-1 flex items-center">
            <HeartIcon className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold">
              <span className="text-blue-600">My</span>Medy
            </span>
          </div>
          <div className="hover:text-blue-600 ">
            <SlArrowLeft />
          </div>
        </div>
        <div className="h-[80vh] overflow-y-scroll">
          <nav className="space-y-2">
            <Link
              href="#"
              className="flex items-center p-2 text-gray-700 hover:text-[#2662F0] rounded"
              prefetch={false}
            >
              <LayoutGridIcon className="h-5 w-5 mr-2" />
              Painel
            </Link>
            <Link
              href="#"
              className="flex items-center p-2 text-gray-700 hover:text-[#2662F0] rounded"
              prefetch={false}
            >
              <UsersIcon className="h-5 w-5 mr-2" />
              Atendimentos
            </Link>
            <Link
              href="#"
              className="flex items-center p-2 text-gray-700 hover:text-[#2662F0] rounded"
              prefetch={false}
            >
              <KanbanIcon className="h-5 w-5 mr-2" />
              Kanban
            </Link>
            <Link
              href="#"
              className="flex items-center p-2 text-gray-700 hover:text-[#2662F0] rounded"
              prefetch={false}
            >
              <MessageCircleIcon className="h-5 w-5 mr-2" />
              Respostas Rápidas
            </Link>
            <Link
              href="#"
              className="flex items-center p-2 text-gray-700 hover:text-[#2662F0] rounded"
              prefetch={false}
            >
              <SquareCheckIcon className="h-5 w-5 mr-2" />
              Tarefas
            </Link>
            <Link
              href="#"
              className="flex items-center p-2 text-gray-700 hover:text-[#2662F0] rounded"
              prefetch={false}
            >
              <UserIcon className="h-5 w-5 mr-2" />
              Contatos
            </Link>
            <Link
              href="#"
              className="flex items-center p-2 text-gray-700 hover:text-[#2662F0] rounded"
              prefetch={false}
            >
              <CalendarIcon className="h-5 w-5 mr-2" />
              Agendamentos
            </Link>
            <Link
              href="#"
              className="flex items-center p-2 text-gray-700 hover:text-[#2662F0] rounded"
              prefetch={false}
            >
              <TagIcon className="h-5 w-5 mr-2" />
              Tags
            </Link>
            <Link
              href="#"
              className="flex items-center p-2 text-gray-700 hover:text-[#2662F0] rounded"
              prefetch={false}
            >
              <MessageSquareIcon className="h-5 w-5 mr-2" />
              Chat Interno
            </Link>
            <Link
              href="#"
              className="flex items-center p-2 text-gray-700 hover:text-[#2662F0] rounded"
              prefetch={false}
            >
              <CircleHelpIcon className="h-5 w-5 mr-2" />
              Ajuda
            </Link>
          </nav>
          <div className="bg-[#E4EAF0] h-1 rounded mt-2"></div>
          <div className="">
            <h3 className="text-sm font-semibold text-gray-500">
              Administração
            </h3>
            <nav className="mt-2 space-y-2">
              <Link
                href="#"
                className="flex items-center p-2 text-gray-700 hover:text-[#2662F0] rounded"
                prefetch={false}
              >
                <PlayIcon className="h-5 w-5 mr-2" />
                Campanhas
              </Link>
              <Link
                href="#"
                className="flex items-center p-2 text-gray-700 hover:text-[#2662F0] rounded"
                prefetch={false}
              >
                <BrainIcon className="h-5 w-5 mr-2" />
                Open.Ai
              </Link>
              <Link
                href="#"
                className="flex items-center p-2 text-gray-700 hover:text-[#2662F0] rounded"
                prefetch={false}
              >
                <PlugIcon className="h-5 w-5 mr-2" />
                Integrações
              </Link>
              <Link
                href="#"
                className="flex items-center p-2 text-gray-700 hover:text-[#2662F0] rounded"
                prefetch={false}
              >
                <LinkIcon className="h-5 w-5 mr-2" />
                Conexões
              </Link>
              <Link
                href="#"
                className="flex items-center p-2 text-gray-700 hover:text-[#2662F0] rounded"
                prefetch={false}
              >
                <FileTextIcon className="h-5 w-5 mr-2" />
                Lista de Arquivos
              </Link>
              <Link
                href="#"
                className="flex items-center p-2 text-gray-700 hover:text-[#2662F0] rounded"
                prefetch={false}
              >
                <MessageSquareIcon className="h-5 w-5 mr-2" />
                Filas & Chatbot
              </Link>
              <Link
                href="#"
                className="flex items-center p-2 text-gray-700 hover:text-[#2662F0] rounded"
                prefetch={false}
              >
                <UsersIcon className="h-5 w-5 mr-2" />
                Usuários
              </Link>
              <Link
                href="#"
                className="flex items-center p-2 text-gray-700 hover:text-[#2662F0] rounded"
                prefetch={false}
              >
                <CodeIcon className="h-5 w-5 mr-2" />
                Api
              </Link>
            </nav>
          </div>
        </div>
        <div className="w-full flex-1 flex items-center">
          <Link
            href="#"
            className="flex items-center p-2 text-gray-700 hover:text-[#2662F0] rounded w-full"
            prefetch={false}
          >
            <SettingsIcon className="h-5 w-5 mr-2" />
            Configs
          </Link>
        </div>
      </aside>
      <main className="flex-1 p-8 bg-gray-50">
        <header className="flex items-center justify-around mb-8">
          <div className=" flex-1">
            <div className="relative ml-auto flex-1 md:grow-0 justify-end">
              <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground self-center" />
              <Input
                type="search"
                placeholder="Buscar"
                className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
              />
            </div>
          </div>
          <div className="flex flex-1 justify-end ">
            <div className="text-[#636D73] self-center mx-10">
              <FaRegBell size={20} />
            </div>
            <div className="flex gap-1">
              <div className="">
                <Image src={avatIcone} width={50} height={50} alt="icone" />
              </div>
              <div className="text-[#414D55] self-center">
                <div className="font-bold">Dr. Victor Jaci</div>
                <div className="">Sócio</div>
              </div>
              <div className="text-[#BBCDD9]  self-center pl-10 ">
                <SlArrowDown size={20} />
              </div>
            </div>
          </div>
        </header>
        <div className="">
          <h1 className="text-[#414D55] font-bold text-2xl">
            Respostas Rápidas
          </h1>
          <table className="min-w-full  text-center mt-5">
            <thead>
              <tr className="text-[#636D73]">
                <th className="py-2 px-4 text-center">Atalho</th>
                <th className="py-2 px-4 text-center">Nome do Arquivo</th>
                <th className="py-2 px-4 text-center">
                  Ações/Adicionar Resposta
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="h-[88px] bg-white font-bold">
                <td dir="ltr" className="py-2 px-4 rounded-s-[17px]  mb-2">
                  Bom dia
                </td>
                <td className="py-2 px-4 mb-2">Sem Anexo</td>
                <td dir="ltr" className="rounded-r-[17px] mb-2 ">
                  <div className="flex justify-center gap-10">
                    <div className="text-[#2662F0] w-12 h-12 rounded-full  shadow-xl flex justify-center items-center hover:cursor-pointer">
                      <FiEdit3 size={20} />
                    </div>
                    <div className="text-[#414D55] w-12 h-12 rounded-full  shadow-xl flex justify-center items-center  hover:cursor-pointer">
                      <FiTrash2 size={20} />
                    </div>
                  </div>
                </td>
              </tr>
              <tr><td className="h-[5px]"></td></tr>
              <tr className="h-[88px] bg-white font-bold">
                <td dir="ltr" className="py-2 px-4 rounded-s-[17px]  mb-2">
                  Bom dia
                </td>
                <td className="py-2 px-4 mb-2">Sem Anexo</td>
                <td dir="ltr" className="rounded-r-[17px] mb-2 ">
                  <div className="flex justify-center gap-10">
                    <div className="text-[#2662F0] w-12 h-12 rounded-full  shadow-xl flex justify-center items-center hover:cursor-pointer">
                      <FiEdit3 size={20} />
                    </div>
                    <div className="text-[#414D55] w-12 h-12 rounded-full  shadow-xl flex justify-center items-center  hover:cursor-pointer">
                      <FiTrash2 size={20} />
                    </div>
                  </div>
                </td>
              </tr>
              <tr><td className="h-[5px]"></td></tr>
              <tr className="h-[88px] bg-white font-bold">
                <td dir="ltr" className="py-2 px-4 rounded-s-[17px]  mb-2">
                </td>
                <td className="py-2 px-4 mb-2"></td>
                <td dir="ltr" className="rounded-r-[17px] mb-2 ">
                  <div className="flex justify-center gap-10">
                  </div>
                </td>
              </tr>
              <tr><td className="h-[5px]"></td></tr>
              <tr className="h-[88px] bg-white font-bold">
                <td dir="ltr" className="py-2 px-4 rounded-s-[17px]  mb-2">
                </td>
                <td className="py-2 px-4 mb-2"></td>
                <td dir="ltr" className="rounded-r-[17px] mb-2 ">
                  <div className="flex justify-center gap-10">
                  </div>
                </td>
              </tr>
              <tr><td className="h-[5px]"></td></tr>
              <tr className="h-[88px] bg-white font-bold">
                <td dir="ltr" className="py-2 px-4 rounded-s-[17px]  mb-2">
                </td>
                <td className="py-2 px-4 mb-2"></td>
                <td dir="ltr" className="rounded-r-[17px] mb-2 ">
                  <div className="flex justify-center gap-10">
                  </div>
                </td>
              </tr>
              <tr><td className="h-[5px]"></td></tr>
              <tr className="h-[88px] bg-white font-bold">
                <td dir="ltr" className="py-2 px-4 rounded-s-[17px]  mb-2">
                </td>
                <td className="py-2 px-4 mb-2"></td>
                <td dir="ltr" className="rounded-r-[17px] mb-2 ">
                  <div className="flex justify-center gap-10">
                  </div>
                </td>
              </tr>
              <tr><td className="h-[5px]"></td></tr>
              <tr className="h-[88px] bg-white font-bold">
                <td dir="ltr" className="py-2 px-4 rounded-s-[17px]  mb-2">
                </td>
                <td className="py-2 px-4 mb-2"></td>
                <td dir="ltr" className="rounded-r-[17px] mb-2 ">
                  <div className="flex justify-center gap-10">
                  </div>
                </td>
              </tr>
              
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

function BrainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
      <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
      <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
      <path d="M17.599 6.5a3 3 0 0 0 .399-1.375" />
      <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
      <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
      <path d="M19.938 10.5a4 4 0 0 1 .585.396" />
      <path d="M6 18a4 4 0 0 1-1.967-.516" />
      <path d="M19.967 17.484A4 4 0 0 1 18 18" />
    </svg>
  );
}

function CalendarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  );
}

function CircleHelpIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <path d="M12 17h.01" />
    </svg>
  );
}

function CodeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function FileTextIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10 9H8" />
      <path d="M16 13H8" />
      <path d="M16 17H8" />
    </svg>
  );
}

function HeartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function KanbanIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 5v11" />
      <path d="M12 5v6" />
      <path d="M18 5v14" />
    </svg>
  );
}

function LayoutGridIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="7" height="7" x="3" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="14" rx="1" />
      <rect width="7" height="7" x="3" y="14" rx="1" />
    </svg>
  );
}

function LinkIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}

function MessageCircleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </svg>
  );
}

function MessageSquareIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function PlayIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="6 3 20 12 6 21 6 3" />
    </svg>
  );
}

function PlugIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22v-5" />
      <path d="M9 8V2" />
      <path d="M15 8V2" />
      <path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z" />
    </svg>
  );
}

function SettingsIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function SquareCheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function TagIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
      <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
    </svg>
  );
}

function UserIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function UsersIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
