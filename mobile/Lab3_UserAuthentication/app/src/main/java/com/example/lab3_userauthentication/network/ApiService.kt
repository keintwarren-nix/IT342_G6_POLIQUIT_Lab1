package com.example.lab3_userauthentication.network

import retrofit2.Response
import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory
import retrofit2.http.Body
import retrofit2.http.POST

data class User(val username: String, val password: String)

interface ApiService {
    @POST("api/users/register")
    suspend fun register(@Body user: User): Response<User>

    @POST("api/users/login")
    suspend fun login(@Body user: User): Response<User>
}

object RetrofitClient {
    private const val BASE_URL = "http://10.0.2.2:8080/"
    val instance: ApiService by lazy {
        Retrofit.Builder()
            .baseUrl(BASE_URL)
            .addConverterFactory(GsonConverterFactory.create())
            .build()
            .create(ApiService::class.java)
    }
}