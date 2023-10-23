import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function DELETE(request, {params}){
    const id = params.id;
    const supabase = createRouteHandlerClient({cookies})
    const {error} = await supabase.from('tickets').delete().eq('id',id)
    return NextResponse.json({error})
}




/*
// ensures request data is not cached by default
export const dynamic = 'force-dynamic';


// handle GET request
export async function GET(request, {params}){
    
    const id = params.id;
    const response = await fetch(`http://localhost:4000/tickets/${id}`)
    const ticket = await response.json();

    if(!response.ok){
        return NextResponse.json({error:'cannot find ticket'},{status: 404})
    }

    return NextResponse.json(ticket,{
        status: 200
    })
}

*/