"use client";

import { useState } from "react"
import * as z from "zod"
import axios from "axios"
import { toast } from "react-hot-toast"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { useAuth, UserButton } from "@clerk/nextjs"
import { useParams, useRouter } from "next/navigation"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
import { Button } from "./ui/button"
import { Badge } from "@/components/ui/badge"
import { NumericFormat } from "react-number-format"
import { format } from 'date-fns'
import { es } from 'date-fns/locale'

const formSchema = z.object({
    transactionId: z.string().min(2),
    qtyTickets: z.string(),
    imageSrc: z.string(),
    price:z.string()
});

import { GiveWay } from "@/types";
import Image from "next/image";
import Link from "next/link";
import ImageUpload from "./ui/image-uplaod";

interface GiveWaydProps {
  data: GiveWay;
}

type FormValues = z.infer<typeof formSchema>

const FeatureGiveway: React.FC<GiveWaydProps> = ({
    data
  }) => {
    const router = useRouter();
    const { isSignedIn } = useAuth();
    const [loading, setLoading] = useState(false);
    const [total, setTotal] = useState(0);
    

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues:  {
            transactionId: '',
            qtyTickets: '',
            imageSrc: '',
            price:''
        }
    });

    const onSubmit = async (values: FormValues) => {
        try {
          setLoading(true);
          console.log("in data.submit")
          values.price = total.toString();
          console.log(values);
          const resp = await axios.post(`/api/transaction`, values);
          console.log(resp);
          toast.success("Compra Realizada con exito!!.");
          form.reset();
          router.refresh();
        } catch (error: any) {
          toast.error('Algo malo ocurrió.');
        } finally {
          setLoading(false);
        }
    };

    return ( 
        <div className="mt-5 sm:mt-10 p-6 bg-gray-800 text-gray-100">   
            <div className="container pr-0 pl-0 grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5 items-center">
                <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 bg-gray-900">
                    <span className="block mb-2 text-violet-400">Sorteo destacado</span>
                    <h1 className="text-3xl font-extrabold text-gray-50">{data.name}</h1>
                    <p className="my-8">
                        <span className="font-medium text-gray-50">{data.description}</span>
                    </p>
                    <div className="my-8 text-left">
                        <p className="text-violet-400"><span className="font-medium text-gray-50">Fecha del sorteo: </span> { format(Date.parse(data.giveawayDate), "MMMM dd, yyyy", {locale:es})}</p>
                        <p className="text-violet-400"><span className="font-medium text-gray-50">Precio de la boleta: </span>
                        <NumericFormat
                            displayType="text"
                            className="ml-auto"
                            value={data.price}
                            prefix="$"
                            thousandSeparator
                        />
                        <span className="ml-1">cop</span></p>
                    </div>
                    {!isSignedIn
                        ? <Link href="/sign-in"> <Button variant="outline" className="w-full py-2 font-semibold rounded border-0 bg-violet-400 hover:bg-violet-500 text-gray-900"> Inicia Sessión para comprar </Button></Link>
                        : <Form {...form}>
                            <form  onSubmit={form.handleSubmit(onSubmit)} onChange={(e) => ((e.target.type == "select-one") && setTotal(parseInt(e.target.value)*parseInt(data.price)))} className="space-y-8 w-full text-left">
                                <FormField
                                    control={form.control}
                                    name="qtyTickets"
                                    render={({ field }) => (
                                        <FormItem>
                                        <FormLabel>Cantidad de boletas</FormLabel>
                                        <FormControl>
                                            <Select  disabled={loading} onValueChange={field.onChange}   value={field.value} defaultValue={field.value}>
                                                <SelectTrigger className="placeholder:text-gray-500 text-gray-500" >
                                                    <SelectValue className="placeholder:text-gray-500 text-gray-500" defaultValue={field.value} placeholder="Seleccione una cantidad" />
                                                </SelectTrigger>
                                                <SelectContent onSelect={field.onChange}>
                                                <SelectItem value="1">1</SelectItem>
                                                <SelectItem value="2">2</SelectItem>
                                                <SelectItem value="5">5</SelectItem>
                                                <SelectItem value="10">10</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </FormControl>
                                        <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <div className="text-lg mr-3">Total a pagar: 
                                    <Badge className="ml-3 text-lg " variant="secondary"><NumericFormat
                                        displayType="text"
                                        className="ml-auto"
                                        value={total}
                                        prefix="$"
                                        thousandSeparator
                                        />
                                        <span className="ml-1">cop</span>
                                    </Badge>
                                </div>
                                
                                <FormField
                                    control={form.control}
                                    name="transactionId"
                                    render={({ field }) => (
                                        <FormItem>
                                        <FormLabel>N° de Transacción</FormLabel>
                                        <FormControl>
                                            <Input className="text-gray-500" disabled={loading} placeholder="Numero de transaccion del pago." {...field} />
                                        </FormControl>
                                        <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="imageSrc"
                                    render={({ field }) => (
                                        <FormItem>
                                        <FormLabel>Imagen para el sorteo</FormLabel>
                                        <FormControl>
                                            <ImageUpload 
                                            value={field.value ? [field.value] : []} 
                                            disabled={loading} 
                                            onChange={(url) => field.onChange(url)}
                                            onRemove={() => field.onChange('')}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                        </FormItem>
                                    )}
                                    />
                                <Button disabled={loading} className="w-full py-2 font-semibold rounded bg-violet-400 hover:bg-violet-500 text-gray-900" type="submit">
                                    Comprar boleta
                                </Button>
                            </form>
                        </Form>
                    }
                    
                    
                </div>
                <Image width="600" height="400" src={data?.imageSrc} alt={data.name} className="object-cover w-full rounded-md xl:col-span-3 bg-gray-500 " />
            </div>
        </div>
    );
}
 
export default FeatureGiveway;


